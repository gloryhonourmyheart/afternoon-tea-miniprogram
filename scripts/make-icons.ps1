param([string]$outputDir = "images")

# CRC32 function
function Get-Crc32 {
    param([byte[]]$data)
    $crc = 0xFFFFFFFF
    for ($i = 0; $i -lt $data.Length; $i++) {
        $crc = ($crc -bxor $data[$i])
        for ($j = 0; $j -lt 8; $j++) {
            if (($crc -band 1) -eq 1) {
                $crc = (($crc -shr 1) -bxor 0xEDB88320)
            } else {
                $crc = ($crc -shr 1)
            }
        }
    }
    return (-bxor $crc 0xFFFFFFFF)
}

# Create chunk
function New-Chunk {
    param([string]$type, [byte[]]$data)
    $length = [BitConverter]::GetBytes([UInt32]$data.Length)
    [Array]::Reverse($length)
    $typeBytes = [System.Text.Encoding]::ASCII.GetBytes($type)
    $crcData = $typeBytes + $data
    $crc = [BitConverter]::GetBytes((Get-Crc32 $crcData))
    [Array]::Reverse($crc)
    return $length + $typeBytes + $data + $crc
}

# Create 48x48 icon
function New-IconPng {
    param([byte]$r, [byte]$g, [byte]$b)
    # PNG signature
    $signature = [byte[]]@(137, 80, 78, 71, 13, 10, 26, 10)
    
    # IHDR chunk (image header)
    $width = [BitConverter]::GetBytes([UInt32]48)
    $height = [BitConverter]::GetBytes([UInt32]48)
    [Array]::Reverse($width)
    [Array]::Reverse($height)
    $ihdrData = $width + $height + [byte]8 + [byte]2 + [byte]0 + [byte]0 + [byte]0
    $ihdr = New-Chunk "IHDR" $ihdrData
    
    # IDAT chunk (image data) - simple solid color with zlib compression
    $rawData = New-Object byte[] (48 * 49)  # 48 rows, each with filter byte + 48*3 bytes
    for ($y = 0; $y -lt 48; $y++) {
        $rawData[$y * 49] = 0  # filter byte
        for ($x = 0; $x -lt 48; $x++) {
            $rawData[$y * 49 + 1 + $x * 3] = $r
            $rawData[$y * 49 + 2 + $x * 3] = $g
            $rawData[$y * 49 + 3 + $x * 3] = $b
        }
    }
    
    # Simple RLE compression for solid color
    $compressedData = [byte[]]@(0x78, 0x01, 0x01, 0x00, 0x01, 0xFF, 0xFF) + [BitConverter]::GetBytes([UInt16]0x4200)
    $compressedData += [byte[]]@(0x00)  # filter type
    $compressedData += [byte[]]@(0x48, 0x00)  # length for row
    $compressedData += [byte[]]@(0x00)  # filter byte repeated
    for ($i = 0; $i -lt 48; $i++) {
        $compressedData += [byte]$r
        $compressedData += [byte]$g
        $compressedData += [byte]$b
    }
    $compressedData += [byte[]]@(0x01, 0x01, 0x00, 0x00, 0x00, 0xFF, 0xFF)
    
    # Calculate adler32
    $adler = 1
    $s1 = 1
    $s2 = 0
    foreach ($byte in $rawData) {
        $s1 = ($s1 + $byte) % 65521
        $s2 = ($s2 + $s1) % 65521
    }
    $adler = ($s2 -shl 16) + $s1
    
    # Proper zlib compressed data for solid color
    $compressed = New-Object System.IO.MemoryStream
    $deflater = New-Object System.IO.Compression.DeflateStream($compressed, [System.IO.Compression.CompressionMode]::Compress)
    $deflater.Write($rawData, 0, $rawData.Length)
    $deflater.Close()
    $compressedData = $compressed.ToArray()
    
    $idat = New-Chunk "IDAT" $compressedData
    
    # IEND chunk
    $iend = New-Chunk "IEND" @()
    
    return $signature + $ihdr + $idat + $iend
}

# Create icons
$grayIcon = New-IconPng 153 153 153  # #999999
$pinkIcon = New-IconPng 255 155 179  # #FF9BB3

# Save icons
[System.IO.Directory]::CreateDirectory($outputDir) | Out-Null

[System.IO.File]::WriteAllBytes("$outputDir/discover.png", $grayIcon)
[System.IO.File]::WriteAllBytes("$outputDir/discover-active.png", $pinkIcon)
[System.IO.File]::WriteAllBytes("$outputDir/profile.png", $grayIcon)
[System.IO.File]::WriteAllBytes("$outputDir/profile-active.png", $pinkIcon)

Write-Host "Icons generated successfully!"