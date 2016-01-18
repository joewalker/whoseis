
/**
 * A list of filename matching regular expressions and their owners
 */
var sections = [
  {
    section: 'aboutdebugging',
    owners: [ 'janx' ],
    matches: [
      /client\/aboutdebugging/,
    ],
    bugzilla: 'Developer Tools: about:debugging',
  },
  {
    section: 'canvasdebugger',
    owners: [ 'vporof' ],
    matches: [
      /client\/canvasdebugger/,
      /server\/actors\/call-watcher\.js/,
      /server\/actors\/canvas\.js/,
    ],
    bugzilla: 'Developer Tools: Canvas Debugger',
  },
  {
    section: 'debugger : client',
    owners: [ 'jlong' ],
    matches: [
      /client\/debugger/,
    ],
    bugzilla: 'Developer Tools: Debugger',
  },
  {
    section: 'debugger : server',
    owners: [ 'ejpbruel' ],
    matches: [
      /server\/actors\/script\.js/, // blame jimb
      /server\/actors\/utils\/make-debugger\.js/, // blame fitzgen
      /server\/actors\/utils\/map-uri-to-addon-id\.js/,
      /server\/actors\/utils\/ScriptStore\.js/, // blame fitzgen
      /server\/actors\/utils\/TabSources\.js/, // blame jlong
    ],
    bugzilla: 'Developer Tools: Debugger',
  },
  {
    section: 'debugger : workers',
    owners: [ 'ejpbruel' ],
    matches: [
      /server\/actors\/worker\.js/,
      /shared\/worker/,
    ],
    bugzilla: 'Developer Tools: Debugger',
  },
  {
    section: 'eyedropper',
    owners: [ 'unknown' ],
    matches: [
      /client\/eyedropper/,
    ],
    bugzilla: '',
  },
  {
    section: 'firefox os : developer tools',
    owners: [ 'janx' ],
    matches: [
      /\/b2g\/chrome\/content\/devtools/,
    ],
    external: [
      'https://github.com/mozilla-b2g/gaia/tree/master/apps/system/js/devtools/',
      'https://github.com/mozilla-b2g/gaia/tree/master/apps/system/style/devtools/',
    ],
    bugzilla: 'Firefox OS::Developer Tools',
  },
  {
    section: 'framework',
    owners: [ 'bgrins' ],
    matches: [
      /client\/framework/,
      /client\/shared\/source-utils\.js/, // blame jsantell
      /client\/preferences/,
    ],
    bugzilla: 'Developer Tools: Framework',
  },
  {
    section: 'framework : extensions',
    owners: [ 'honza' ],
    matches: [
      /server\/actors\/actor-registry\.js/,
      /server\/actors\/addon\.js/, // blame ochameau
      /server\/actors\/utils\/actor-registry-utils\.js/,
    ],
    bugzilla: 'Developer Tools: Framework',
  },
  {
    section: 'framework : react',
    owners: [ 'jlong' ],
    matches: [
      /client\/shared\/redux/,
    ],
    bugzilla: 'Developer Tools: Framework',
  },
  {
    section: 'framework : shims',
    owners: [ 'jryans' ],
    matches: [
      /client\/shims/,
      /server\/shims/,
      /shared\/shims/,
    ],
    bugzilla: 'Developer Tools: Framework',
  },
  {
    section: 'framework : themes',
    owners: [ 'bgrins' ],
    matches: [
      /client\/shared\/theme-switching\.js/,
      /client\/shared\/theme\.js/,
      /client\/themes/,
    ],
    bugzilla: 'Developer Tools: Framework',
  },
  {
    section: 'framework : widgets',
    owners: [ 'vporof', 'jlong' ],
    matches: [
      /client\/shared\/autocomplete-popup\.js/, // blame bgrins
      /client\/shared\/doorhanger\.js/, // blame jsantell
      /client\/shared\/splitview\.css/, // blame lin
      /client\/shared\/SplitView\.jsm/, // blame lin
      /client\/shared\/widgets/, // blame vporof
      /client\/shared\/test/,
    ],
    bugzilla: 'Developer Tools: Framework',
  },
  {
    section: 'gcli',
    owners: [ 'jwalker' ],
    matches: [
      /shared\/gcli/,
      /client\/commandline\/[_a-zA-Z0-9]*.[a-z]*/, // i.e don't include the test folder
      /client\/commandline\/test\/head.js/,
      /client\/commandline\/test\/helpers.js/,
      /client\/commandline\/test\/browser_gcli_[_a-zA-Z0-9]*.js/,
    ],
    bugzilla: 'Developer Tools: Graphic Command line and Developer Toolbar',
  },
  {
    section: 'gcli : commands',
    owners: [ 'mratcliffe' ],
    matches: [
      /client\/shared\/AppCacheUtils\.jsm/,
      /client\/shared\/Jsbeautify\.jsm/,
      /client\/commandline\/test\/browser_cmd_[_a-zA-Z0-9]*.js/,
      /shared\/jsbeautify/,
      /shared\/gcli\/commands/,
    ],
    bugzilla: 'Developer Tools: Graphic Command line and Developer Toolbar',
  },
  {
    section: 'gcli : devtoolbar',
    owners: [ 'mratcliffe' ],
    matches: [
      /client\/shared\/DeveloperToolbar\.jsm/,
    ],
    bugzilla: 'Developer Tools: Graphic Command line and Developer Toolbar',
  },
  {
    section: 'inspector',
    owners: [ 'pbrosset' ],
    matches: [
      /client\/animationinspector/,
      /client\/fontinspector/,
      /client\/inspector/,
      /client\/layoutview/,
      /client\/markupview/,
      /client\/shared\/DOMHelpers\.jsm/,
      /client\/shared\/frame-script-utils\.js/,
      /client\/shared\/inplace-editor\.js/, // blame mratcliffe
      /client\/shared\/node-attribute-parser\.js/,
      /client\/shared\/undo\.js/,
      /client\/styleinspector/,
      /server\/actors\/animation\.js/,
      /server\/actors\/layout\.js/,
      /shared\/styleinspector/, // blame mratcliffe
      /server\/actors\/inspector\.js/, // blame bgrins
    ],
    bugzilla: 'Developer Tools: Inspector',
  },
  {
    section: 'inspector : highlighters',
    owners: [ 'zer0' ],
    matches: [
      /server\/actors\/highlighters[-a-z]+/,
      /shared\/layout/,
    ],
    bugzilla: 'Developer Tools: Inspector',
  },
  {
    section: 'inspector : styles',
    owners: [ 'tromey' ],
    matches: [
      /client\/shared\/css-parsing-utils\.js/,
      /server\/actors\/styleeditor\.js/,
      /server\/actors\/styles\.js/,
      /server\/actors\/stylesheets\.js/,
    ],
    bugzilla: 'Developer Tools: Inspector',
  },
  {
    section: 'jsonview',
    owners: [ 'honza' ],
    matches: [
      /client\/jsonview/,
    ],
    bugzilla: 'Developer Tools: JSON Viewer',
  },
  {
    section: 'markers',
    owners: [ 'vporof' ],
    matches: [
      /docshell\/timeline/,
    ],
    bugzilla: 'Developer Tools: Performance Tools (Profiler/Timeline)',
  },
  {
    section: 'memory',
    owners: [ 'fitzgen' ],
    matches: [
      /client\/memory/,
      /server\/actors\/heap-snapshot-file\.js/,
      /server\/actors\/memory\.js/,
      /server\/actors\/memprof\.js/,
      /server\/actors\/utils\/stack\.js/, // blame tromey
      /shared\/heapsnapshot/,
    ],
    bugzilla: 'Developer Tools: Memory',
  },
  {
    section: 'netmonitor',
    owners: [ 'honza' ],
    matches: [
      /client\/netmonitor/,
      /client\/shared\/Curl\.jsm/,
    ],
    bugzilla: 'Developer Tools: Netmonitor',
  },
  {
    section: 'performance',
    owners: [ 'jsantell' ],
    matches: [
      /client\/performance/,
      /client\/shared\/options-view\.js/,
      /client\/shared\/poller\.js/,
      /server\/actors\/eventlooplag\.js/,
      /server\/actors\/framerate\.js/,
      /server\/actors\/performance[-a-z]+/,
      /server\/actors\/profiler\.js/,
      /server\/actors\/timeline\.js/,
      /server\/performance/,
      /shared\/performance/,
    ],
    bugzilla: 'Developer Tools: Performance Tools (Profiler/Timeline)',
  },
  {
    section: 'promisedebugger',
    owners: [ 'gl' ],
    matches: [
      /client\/promisedebugger/,
      /server\/actors\/promises\.js/,
    ],
    bugzilla: '',
  },
  {
    section: 'responsivedesign',
    owners: [ 'jryans' ],
    matches: [
      /client\/responsivedesign/,
      /shared\/touch/,
    ],
    bugzilla: 'Developer Tools: Responsive Mode',
  },
  {
    section: 'scratchpad',
    owners: [ 'fitzgen' ],
    matches: [
      /client\/scratchpad/,
    ],
    bugzilla: 'Developer Tools: Scratchpad',
  },
  {
    section: 'server',
    owners: [ 'ochameau', 'jimb' ],
    matches: [
      /server\/actors\/child-process\.js/,
      /server\/actors\/childtab\.js/,
      /server\/actors\/chrome\.js/,
      /server\/actors\/common\.js/,
      /server\/actors\/director-manager\.js/,
      /server\/actors\/director-registry\.js/,
      /server\/actors\/object\.js/, // blame gl
      /server\/actors\/root\.js/,
      /server\/actors\/string\.js/,
      /server\/actors\/webbrowser\.js/,
      /server\/main\.js/,
      /shared\/client/,
      /client\/shared\/browser-loader\.js/, // blame jlong
      /shared\/Loader\.jsm/,
      /server\/tests/,
    ],
    bugzilla: '',
  },
  {
    section: 'server : transport',
    owners: [ 'jryans' ],
    matches: [
      /shared\/transport/,
    ],
    bugzilla: '',
  },
  {
    section: 'server : auth',
    owners: [ 'jryans' ],
    matches: [
      /shared\/discovery/,
      /shared\/qrcode/,
      /shared\/security/,
    ],
    bugzilla: '',
  },
  {
    section: 'shadereditor',
    owners: [ 'vporof' ],
    matches: [
      /client\/shadereditor/,
      /server\/actors\/webgl\.js/,
    ],
    bugzilla: 'Developer Tools: WebGL Shader Editor',
  },
  {
    section: 'sourceeditor',
    owners: [ 'gl' ],
    matches: [
      /client\/sourceeditor/,
      /client\/sourceeditor\/codemirror/,
    ],
    bugzilla: 'Developer Tools: Source Editor',
  },
  {
    section: 'sourcemap',
    owners: [ 'fitzgen' ],
    matches: [
      /server\/actors\/pretty-print-worker\.js/,
      /shared\/acorn/,
      /shared\/pretty-fast/,
      /shared\/sourcemap/,
    ],
    bugzilla: '',
  },
  {
    section: 'storage',
    owners: [ 'mratcliffe' ],
    matches: [
      /client\/storage/,
      /server\/actors\/storage\.js/,
    ],
    bugzilla: 'Developer Tools: Storage Inspector',
  },
  {
    section: 'styleeditor',
    owners: [ 'gl' ],
    matches: [
      /client\/styleeditor/,
      /server\/actors\/csscoverage\.js/, // blame jwalker
    ],
    bugzilla: 'Developer Tools: Style Editor',
  },
  {
    section: 'telemetry',
    owners: [ 'mratcliffe' ],
    matches: [
      /client\/shared\/telemetry\.js/,
    ],
    bugzilla: '',
  },
  {
    section: 'tilt',
    owners: [ 'vporof' ],
    matches: [
      /client\/tilt/,
    ],
    bugzilla: 'Developer Tools: 3D View',
  },
  {
    section: 'webaudioeditor',
    owners: [ 'jsantell' ],
    matches: [
      /client\/webaudioeditor/,
      /server\/actors\/utils\/audionodes\.json/,
      /server\/actors\/utils\/automation-timeline\.js/,
      /server\/actors\/webaudio\.js/,
    ],
    bugzilla: 'Developer Tools: Web Audio Editor',
  },
  {
    section: 'webconsole',
    owners: [ 'bgrins', 'lin' ],
    matches: [
      /client\/webconsole/,
      /server\/actors\/webconsole\.js/,
      /shared\/webconsole/,
    ],
    bugzilla: 'Developer Tools: Console',
  },
  {
    section: 'webide',
    owners: [ 'jryans', 'janx', 'ochameau' ],
    matches: [
      /client\/shared\/observable-object\.js/,
      /client\/shared\/devices\.js/,
      /client\/shared\/getjson\.js/,
      /client\/projecteditor/,
      /client\/webide/,
      /server\/actors\/device\.js/,
      /server\/actors\/monitor\.js/, // blame janx
      /server\/actors\/preference\.js/,
      /server\/actors\/settings\.js/, // blame jfong
      /server\/actors\/webapps\.js/, // blame ochameau
      /shared\/apps/, // blame ochameau
    ],
    bugzilla: 'Developer Tools: WebIDE',
  },
];

/**
 * Search for a match for `filename` in `matches[x].regexp` and return the
 * associated `owner`.
 */
function whoseis(filename) {
  filename = filename.replace(/^[\/]/, '').replace(/^devtools\//, '');

  var owners = null;

  for (var s = 0; s < sections.length && owners == null; s++) {
    var section = sections[s];
    for (var i = 0; i < section.matches.length && owners == null; i++) {
      var match = section.matches[i];
      if (filename.match(match)) {
        owners = section.owners;
      }
    }
  }

  return owners || [];
}

/**
 * Like whoseis, but returns a string, making it easy to use as an Apps Script
 */
function whoseisStr(filename) {
  return whoseis(filename).join(', ');
}

if (typeof exports !== 'undefined') {
  exports.whoseis = whoseis;
}
