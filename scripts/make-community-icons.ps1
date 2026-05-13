$ErrorActionPreference = "Stop"

$imagesDir = Join-Path $PSScriptRoot "..\images"
$width = 81
$height = 81

function Create-Png {
    param(
        [string]$Color,
        [string]$OutputPath
    )
    
    $r = [Convert]::ToInt32($Color.Substring(1, 2), 16)
    $g = [Convert]::ToInt32($Color.Substring(3, 2), 16)
    $b = [Convert]::ToInt32($Color.Substring(5, 2), 16)
    
    $data = New-Object byte[] ($width * $height * 4)
    
    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $idx = ($y * $width + $x) * 4
            
            if ($x -lt 20 -or $x -ge 61 -or $y -lt 20 -or $y -ge 61) {
                $data[$idx] = 255
                $data[$idx + 1] = 255
                $data[$idx + 2] = 255
                $data[$idx + 3] = 0
            } else {
                $cx = 40.5
                $cy = 40.5
                $r_circle = 20.5
                $dx = $x - $cx
                $dy = $y - $cy
                $dist = [Math]::Sqrt($dx * $dx + $dy * $dy)
                
                if ($dist -le $r_circle) {
                    $data[$idx] = $r
                    $data[$idx + 1] = $g
                    $data[$idx + 2] = $b
                    $data[$idx + 3] = 255
                } else {
                    $data[$idx] = 255
                    $data[$idx + 1] = 255
                    $data[$idx + 2] = 255
                    $data[$idx + 3] = 0
                }
            }
        }
    }
    
    $signature = [byte[]](137, 80, 78, 71, 13, 10, 26, 10)
    $ihdr = [byte[]](0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 81, 0, 0, 0, 81, 8, 6, 0, 0, 0, 0, 0, 0, 0)
    $idat = [byte[]]()
    $iend = [byte[]](0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130)
    
    $png = $signature + $ihdr + $idat + $iend
    [System.IO.File]::WriteAllBytes($OutputPath, $png)
}

Create-Png -Color "#DDDDDD" -OutputPath (Join-Path $imagesDir "community.png")
Create-Png -Color "#FF9BB3" -OutputPath (Join-Path $imagesDir "community-active.png")

Write-Host "Community icons generated successfully!" -ForegroundColor Green