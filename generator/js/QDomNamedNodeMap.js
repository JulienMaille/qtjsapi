
      // auto generated
      //var self;

      // class constructor:
      function QDomNamedNodeMap() {
        

        // should be QDomNamedNodeMap_BaseJs.call(this, engine):
        //QDomNamedNodeMap.prototype = new QDomNamedNodeMap_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomNamedNodeMap.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QDomNamedNodeMap);
                
            //}
          }
          else {
            qWarning("QDomNamedNodeMap.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomNamedNodeMap_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDomNamedNodeMap);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNamedNodeMap);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomNamedNodeMap_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDomNamedNodeMap);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomNamedNodeMap);
  }

  
  else {
    
        print("QDomNamedNodeMap(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
        }

        

      }

      //QDomNamedNodeMap.prototype = new QDomNamedNodeMap_BaseJs(engine);
      //QDomNamedNodeMap.prototype = new QDomNamedNodeMap_Wrapper(engine);
      QDomNamedNodeMap.prototype = new Object();

      QDomNamedNodeMap.prototype.toString = function() {
          //return "QDomNamedNodeMap [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomNamedNodeMap [JS]";
        };
      QDomNamedNodeMap.getObjectType = function() {
        return RJSType_QDomNamedNodeMap.getIdStatic();
      };

      QDomNamedNodeMap.prototype.getObjectType = function() {
        return RJSType_QDomNamedNodeMap.getIdStatic();
      };

      QDomNamedNodeMap.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomNamedNodeMap.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomNamedNodeMap.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomNamedNodeMap.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      