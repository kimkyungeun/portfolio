/**
 * @file extends.js
 * <p>extends.js :JS extends</p>
 */

(function(window, undefined) {

ScriptLoader = (function ScriptLoader() {
	var _head = document.getElementsByTagName("head")[0];
	var _baseElement = document.getElementsByTagName("base")[0];
	var _queue = [];
	var _queueing = false;

	if ( _baseElement ) {
		_head = baseElement.parentNode;
	}

	var _nextQueue = function() {

		var script = _queue.shift();

		if ( _baseElement ) {
			_head.insertBefore(script, _baseElement );
		} else {
			_head.appendChild(script);
		}
	};

	return {
		scriptPath: function( fileName ) {
			var elements = document.getElementsByTagName('script'),
				protocal = document.location.protocol,
				scriptPath = "",
				components;

			for (var i = 0; i < elements.length; i++) {
				if (elements[i].src && elements[i].src.indexOf(fileName) != -1) {
					scriptPath = elements[i].src.substring(0, elements[i].src.lastIndexOf('/') + 1);
					break;
				}
			}

			scriptPath = scriptPath.replace(document.location.protocol + "//", '');
			components = scriptPath.split("/");

			if ( components.length > 0 && components[components.length-1] == "" ) {
				components.pop();
			}

			return protocal + "//" + components.join("/");
		},

		loadScript: function( path, rootPath, callback, useQueue ) {
			if ( arguments[0] != undefined && arguments[0].constructor === Array ) {
				var files = arguments[0];
				for ( var i in files ) {
					var file = files[i];
					this.loadScript( file, rootPath, callback, useQueue );
				}

				return files;
			}

			var src = ( rootPath !== "" ) ? ( rootPath + "/" + path ) : path;
			var loaded = false;
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = src;
			script.charset = "utf-8";

		    if ( callback || useQueue ) {
				script.onreadystatechange = script.onload = function() {
					if ( loaded === false ) {
						if ( typeof callback === "function" ) {
							callback()
						}
					}

					loaded = true;

					if ( useQueue ) {

						if ( _queue.length == 0 ) {
							_queueing = false;
						} else {
							_nextQueue();
						}
					}
		        };
		    }

		    if ( useQueue === true ) {
			    _queue.push( script );

			    if ( _queueing === false ) {
				    _queueing = true;
				    _nextQueue();
			    }
		    }
			else {
				if ( _baseElement ) {
					_head.insertBefore(script, _baseElement );
				} else {
					_head.appendChild(script);
				}
			}
		},

		writeScript: function( path, rootPath ) {
			if ( arguments[0] != undefined && arguments[0].constructor === Array ) {
				var files = arguments[0];
				for ( var i in files ) {
					var file = files[i];
					this.writeScript( file, rootPath );
				}

				return files;
			}

			var src = ( rootPath !== "" ) ? ( rootPath + "/" + path ) : path;
			document.write( '<script type="text/javascript" src="' + src + '"></script>' );
		}
	};
})();

})(window);

(function(window, undefined) {

var thisFileName = "extends.js",

importFiles = [
	"common/comm_frm.js",
	"common/menu.js"
];

ScriptLoader.writeScript( importFiles, ScriptLoader.scriptPath(thisFileName) );

})(window);
