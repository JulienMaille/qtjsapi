
      // auto generated
      //var self;

      // class constructor:
      function QSlider() {
        

        // should be QSlider_BaseJs.call(this, engine):
        //QSlider.prototype = new QSlider_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSlider.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSlider);
                
            //}
          }
          else {
            qWarning("QSlider.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSlider_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSlider);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSlider);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSlider_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSlider);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSlider);
  }

  
  else {
    
        print("QSlider(): wrong number / type of arguments");
      
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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["valueChanged(int)"] = Object.getPrototypeOf(this).valueChanged;
  
    this["sliderMoved(int)"] = Object.getPrototypeOf(this).sliderMoved;
  
    this["rangeChanged(int,int)"] = Object.getPrototypeOf(this).rangeChanged;
  
    this["actionTriggered(int)"] = Object.getPrototypeOf(this).actionTriggered;
  
            }
          
        }

        

      }

      //QSlider.prototype = new QSlider_BaseJs(engine);
      //QSlider.prototype = new QSlider_Wrapper(engine);
      QSlider.prototype = new Object();

      QSlider.prototype.toString = function() {
          //return "QSlider [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSlider [JS]";
        };
      QSlider.getObjectType = function() {
        return RJSType_QSlider.getIdStatic();
      };

      QSlider.prototype.getObjectType = function() {
        return RJSType_QSlider.getIdStatic();
      };

      QSlider.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSlider.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractSlider.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SliderAction
QSlider.SliderNoAction = QSlider_Wrapper.SliderNoAction;
QSlider.SliderSingleStepAdd = QSlider_Wrapper.SliderSingleStepAdd;
QSlider.SliderSingleStepSub = QSlider_Wrapper.SliderSingleStepSub;
QSlider.SliderPageStepAdd = QSlider_Wrapper.SliderPageStepAdd;
QSlider.SliderPageStepSub = QSlider_Wrapper.SliderPageStepSub;
QSlider.SliderToMinimum = QSlider_Wrapper.SliderToMinimum;
QSlider.SliderToMaximum = QSlider_Wrapper.SliderToMaximum;
QSlider.SliderMove = QSlider_Wrapper.SliderMove;

  // enum: TickPosition
QSlider.NoTicks = QSlider_Wrapper.NoTicks;
QSlider.TicksAbove = QSlider_Wrapper.TicksAbove;
QSlider.TicksLeft = QSlider_Wrapper.TicksLeft;
QSlider.TicksBelow = QSlider_Wrapper.TicksBelow;
QSlider.TicksRight = QSlider_Wrapper.TicksRight;
QSlider.TicksBothSides = QSlider_Wrapper.TicksBothSides;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSlider.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSlider.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      