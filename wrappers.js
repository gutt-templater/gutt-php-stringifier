module.exports = function (id) {
  return {
    prefix:
    '<?php\n' +
    'if (!defined(\'MKARR_OPEN\')) {\n' +
    '  define(\'MKARR_OPEN\', 2 << 1);\n' +
    '}\n' +
    'if (!defined(\'MKARR_CLOSE\')) {\n' +
    '  define(\'MKARR_CLOSE\', 1 << 1);\n' +
    '}\n' +
    'if (!function_exists(\'classes\')) {\n' +
    '  function classes() {\n' +
    '    $params = func_get_args();\n' +
    '    $classes = array();\n' +
    '    foreach($params as $value) {\n' +
    '      if (!empty($value)) {\n' +
    '        $classes[] = $value;\n' +
    '      }\n' +
    '    }\n' +
    '    return implode(\' \', $classes);\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'mkArr\')) {\n' +
    '  function mkArr($start, $end, $flag) {\n' +
    '    $arr = [];\n' +
    '    if ($flag & MKARR_OPEN) {\n' +
    '      if ($start <= $end) {\n' +
    '        for ($i = $start; $i < $end; $i++) {\n' +
    '          $arr[] = $i;\n' +
    '        }\n' +
    '      } else {\n' +
    '        for ($i = $start; $i > $end; $i--) {\n' +
    '          $arr[] = $i;\n' +
    '        }\n' +
    '      }\n' +
    '    } elseif ($flag & MKARR_CLOSE) {\n' +
    '      if ($start <= $end) {\n' +
    '        for ($i = $start; $i <= $end; $i++) {\n' +
    '          $arr[] = $i;\n' +
    '        }\n' +
    '      } else {\n' +
    '        for ($i = $start; $i >= $end; $i--) {\n' +
    '          $arr[] = $i;\n' +
    '        }\n' +
    '      }\n' +
    '    }\n' +
    '    return $arr;\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'toFixed\')) {\n' +
    '  function toFixed($num, $len, $sprtr1) {\n' +
    '    if (strpos($num, \'.\') !== false) {\n' +
    '      if ($len > 0) {\n' +
    '        $num = substr($num, 0, strpos($num, \'.\') + $len + 1);\n' +
    '      } else {\n' +
    '        $num = substr($num, 0, strpos($num, \'.\'));\n' +
    '      }\n' +
    '    }\n' +
    '    return number_format($num, $len, $sprtr1, \'\');\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'str_pos\')) {\n' +
    '  function str_pos($str, $substr) {\n' +
    '    $res = strpos($str, $substr);\n' +
    '    return ($res === false ? -1 : $res);\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'str_upfirst\')) {\n' +
    '  function str_upfirst($str) {\n' +
    '    $res = explode(\' \', preg_replace(\'/[\\s\\n\\t]+/\', \' \', $str));\n' +
    '    foreach ($res as $index => $word) {\n' +
    '      $res[$index] = mb_strtoupper(mb_substr($word, 0, 1, \'UTF-8\'), \'UTF-8\') . mb_strtolower(mb_substr($word, 1, NULL, \'UTF-8\'), \'UTF-8\');\n' +
    '    }\n' +
    '    return implode(\' \', $res);\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'str_camel\')) {\n' +
    '  function str_camel($str) {\n' +
    '    $res = explode(\' \', preg_replace(\'/[\\s\\n\\t]+/\', \' \', $str));\n' +
    '    foreach ($res as $index => $word) {\n' +
    '      if (!$index) continue;\n' +
    '      $res[$index] = mb_strtoupper(mb_substr($word, 0, 1, \'UTF-8\'), \'UTF-8\') . mb_strtolower(mb_substr($word, 1, NULL, \'UTF-8\'), \'UTF-8\');\n' +
    '    }\n' +
    '    return implode(\'\', $res);\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'str_kebab\')) {\n' +
    '  function str_kebab($str) {\n' +
    '    $res = explode(\' \', preg_replace(\'/[\\s\\n\\t]+/\', \' \', $str));\n' +
    '    foreach ($res as $index => $word) {\n' +
    '      $res[$index] = mb_strtolower($word, \'UTF-8\');\n' +
    '    }\n' +
    '    return implode(\'-\', $res);\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'arr_push\')) {\n' +
    '  function arr_push(& $arr, $value) {\n' +
    '    array_push($arr, $value);\n' +
    '    return \'\';\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'arr_unshift\')) {\n' +
    '  function arr_unshift(& $arr, $value) {\n' +
    '    array_unshift($arr, $value);\n' +
    '    return \'\';\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'arr_rand\')) {\n' +
    '  function arr_rand($arr) {\n' +
    '    $keys = array_keys($arr);\n' +
    '    return $arr[$keys[rand(0, count($keys) - 1)]];\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'arr_sort\')) {\n' +
    '  function arr_sort($arr) {\n' +
    '    $sorted = $arr;\n' +
    '    sort($sorted);\n' +
    '    return $sorted;\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'arr_sort_reverse\')) {\n' +
    '  function arr_sort_reverse($arr) {\n' +
    '    $sorted = $arr;\n' +
    '    rsort($sorted);\n' +
    '    return $sorted;\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'arr_key\')) {\n' +
    '  function arr_key($arr, $value) {\n' +
    '    $key = array_search($value, $arr);\n' +
    '    if ($key === false) return -1;\n' +
    '    return $key;\n' +
    '  }\n' +
    '}\n' +
    'if (!function_exists(\'generateHtml\')) {\n' +
    '  function generateHtml($elements) {\n'+
    '    $result = [];\n' +
    '    $logicAttrs = [\'defer\', \'async\', \'readonly\', \'selected\', \'checked\', \'disabled\', \'autofocus\', \'required\', \'multiple\', \'autoplay\', \'controls\', \'loop\', \'muted\'];\n' +
    '    foreach ($elements as $element) {\n' +
    '      if (isset($element[\'comment\'])) {\n' +
    '        $result[] = \'<!--\' . $element[\'comment\'] . \'-->\';\n' +
    '      } elseif (isset($element[\'script\'])) {\n' +
    '        $attrs = \'\';\n' +
    '        foreach ($element[\'script\'][\'attrs\'] as $key => $value) {\n' +
    '          if ($value !== false && $value !== null) {\n' +
    '            $attrs .= " " . $key . (!in_array($key, $logicAttrs) ? "=\\"" . $value . "\\"" : "");\n' +
    '          }' +
    '        }\n' +
    '        $result[] = \'<script\' . $attrs . \'>\' . $element[\'script\'][\'body\'] . \'</script>\';\n' +
    '      } elseif (isset($element[\'text\'])) {\n' +
    '        $result[] = $element[\'text\'];\n' +
    '      } elseif (isset($element[\'tag\'])) {\n' +
    '        $attrs = \'\';\n' +
    '        foreach ($element[\'attrs\'] as $key => $value) {\n' +
    '          if ($value !== false && $value !== null) {\n' +
    '            $attrs .= " " . $key . (!in_array($key, $logicAttrs) && $value !== true ? "=\\"" . $value . "\\"" : "");\n' +
    '          }' +
    '        }\n' +
    '        $result[] = \'<\' . $element[\'tag\'] . $attrs .\n' +
    '        (isset($element[\'children\']) ? \'>\' . generateHtml($element[\'children\']) . \'</\' . $element[\'tag\'] . \'>\' : ($element[\'tag\'] === \'!DOCTYPE\' ? \'\' : \' /\') . \'>\');\n' +
    '      }\n' +
    '    }\n' +
    '    return implode(\'\', $result);\n' +
    '  }\n'+
    '}\n' +
    '$__template' + id + ' = function ($__data = [], $__children = false, $returnAsElements = false, $__state = null) use (&$__template' + id + ') {\n' +
    '  $__components = [];\n' +
    '  $__stack = [];\n' +
    '  if (is_null($__state)) $__state = $__data;\n' +
    '  $children0 = [];\n' +
    '  ob_start();\n' +
    '// >>> GENERATED CODE\n' +
    '?>\n',
  postfix:
    '<?php\n' +
    '// <<< GENERATED CODE\n' +
    '   ob_end_clean();\n' +
    '  return $returnAsElements !== false ? $children0 : generateHtml($children0);\n' +
    '};\n' +
    'return $__template' + id + ';'
  }
}
