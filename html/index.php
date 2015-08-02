<?php
$title = 'Symbols browser' ;
$stylesheets = array('symbols.css') ;
$js_scripts = array('ZeroClipboard.js', 'symbols.js') ;
include_once('project.php') ;
include_once($_SERVER['DOCUMENT_ROOT'] . '/_core/preamble.php') ;
?>
  <div class="right">
    <h3>Copy box</h3>
    <table id="table_copy_box">
      <tbody>
        <tr>
          <td id="td_copy_box">...</td>
          <td id="td_wide_copy_box"><input id="input_wide_copy_box" value=""/>
          <td id="td_copy_button">
            <button class="large_button" onclick="clear_box()">Clear</button><br />
            <button class="large_button" id="copy_button">Copy</button<br />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="right">
    <h3>Symbols</h3>
    <table id="table_symbols">
      <thead id="thead_greek"><tr><th class="th_symbols" colspan="99">Greek alphabet</th></tr></thead>
      <tbody id="tbody_greek"></tbody>
      <thead id="thead_maths"><tr><th class="th_symbols" colspan="99">Mathematics</th></tr></thead>
      <tbody id="tbody_maths"></tbody>
      <thead id="thead_other"><tr><th class="th_symbols" colspan="99">Other symbols</th></tr></thead>
      <tbody id="tbody_other"></tbody>
    </table>
  </div>
  
<?php foot() ; ?>