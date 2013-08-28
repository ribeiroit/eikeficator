<?php

$eikeCorp = substr(str_shuffle(str_repeat("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5)), 0, 2) . 'X';
echo "Eike's next corp name is " . $eikeCorp . PHP_EOL;
