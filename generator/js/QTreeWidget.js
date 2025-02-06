
      // auto generated
      //var self;

      // class constructor:
      function QTreeWidget() {
        

        // should be QTreeWidget_BaseJs.call(this, engine):
        //QTreeWidget.prototype = new QTreeWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTreeWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QTreeWidget);
                
            //}
          }
          else {
            qWarning("QTreeWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QTreeWidget.js: No constructor found for class QTreeWidget");
            
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
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["expanded(QModelIndex)"] = Object.getPrototypeOf(this).expanded;
  
    this["collapsed(QModelIndex)"] = Object.getPrototypeOf(this).collapsed;
  
    this["itemPressed(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemPressed;
  
    this["itemClicked(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemClicked;
  
    this["itemDoubleClicked(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemDoubleClicked;
  
    this["itemActivated(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemActivated;
  
    this["itemEntered(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemEntered;
  
    this["itemChanged(QTreeWidgetItem*,int)"] = Object.getPrototypeOf(this).itemChanged;
  
    this["itemExpanded(QTreeWidgetItem*)"] = Object.getPrototypeOf(this).itemExpanded;
  
    this["itemCollapsed(QTreeWidgetItem*)"] = Object.getPrototypeOf(this).itemCollapsed;
  
    this["currentItemChanged(QTreeWidgetItem*,QTreeWidgetItem*)"] = Object.getPrototypeOf(this).currentItemChanged;
  
            }
          
        }

        

      }

      //QTreeWidget.prototype = new QTreeWidget_BaseJs(engine);
      //QTreeWidget.prototype = new QTreeWidget_Wrapper(engine);
      QTreeWidget.prototype = new Object();

      QTreeWidget.prototype.toString = function() {
          //return "QTreeWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTreeWidget [JS]";
        };
      QTreeWidget.getObjectType = function() {
        return RJSType_QTreeWidget.getIdStatic();
      };

      QTreeWidget.prototype.getObjectType = function() {
        return RJSType_QTreeWidget.getIdStatic();
      };

      QTreeWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTreeWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTreeView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTreeWidget.NoFrame = QTreeWidget_Wrapper.NoFrame;
QTreeWidget.Box = QTreeWidget_Wrapper.Box;
QTreeWidget.Panel = QTreeWidget_Wrapper.Panel;
QTreeWidget.WinPanel = QTreeWidget_Wrapper.WinPanel;
QTreeWidget.HLine = QTreeWidget_Wrapper.HLine;
QTreeWidget.VLine = QTreeWidget_Wrapper.VLine;
QTreeWidget.StyledPanel = QTreeWidget_Wrapper.StyledPanel;

  // enum: Shadow
QTreeWidget.Plain = QTreeWidget_Wrapper.Plain;
QTreeWidget.Raised = QTreeWidget_Wrapper.Raised;
QTreeWidget.Sunken = QTreeWidget_Wrapper.Sunken;

  // enum: StyleMask
QTreeWidget.Shadow_Mask = QTreeWidget_Wrapper.Shadow_Mask;
QTreeWidget.Shape_Mask = QTreeWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QTreeWidget.AdjustIgnored = QTreeWidget_Wrapper.AdjustIgnored;
QTreeWidget.AdjustToContentsOnFirstShow = QTreeWidget_Wrapper.AdjustToContentsOnFirstShow;
QTreeWidget.AdjustToContents = QTreeWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
QTreeWidget.NoSelection = QTreeWidget_Wrapper.NoSelection;
QTreeWidget.SingleSelection = QTreeWidget_Wrapper.SingleSelection;
QTreeWidget.MultiSelection = QTreeWidget_Wrapper.MultiSelection;
QTreeWidget.ExtendedSelection = QTreeWidget_Wrapper.ExtendedSelection;
QTreeWidget.ContiguousSelection = QTreeWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QTreeWidget.SelectItems = QTreeWidget_Wrapper.SelectItems;
QTreeWidget.SelectRows = QTreeWidget_Wrapper.SelectRows;
QTreeWidget.SelectColumns = QTreeWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
QTreeWidget.EnsureVisible = QTreeWidget_Wrapper.EnsureVisible;
QTreeWidget.PositionAtTop = QTreeWidget_Wrapper.PositionAtTop;
QTreeWidget.PositionAtBottom = QTreeWidget_Wrapper.PositionAtBottom;
QTreeWidget.PositionAtCenter = QTreeWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QTreeWidget.NoEditTriggers = QTreeWidget_Wrapper.NoEditTriggers;
QTreeWidget.CurrentChanged = QTreeWidget_Wrapper.CurrentChanged;
QTreeWidget.DoubleClicked = QTreeWidget_Wrapper.DoubleClicked;
QTreeWidget.SelectedClicked = QTreeWidget_Wrapper.SelectedClicked;
QTreeWidget.EditKeyPressed = QTreeWidget_Wrapper.EditKeyPressed;
QTreeWidget.AnyKeyPressed = QTreeWidget_Wrapper.AnyKeyPressed;
QTreeWidget.AllEditTriggers = QTreeWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QTreeWidget.ScrollPerItem = QTreeWidget_Wrapper.ScrollPerItem;
QTreeWidget.ScrollPerPixel = QTreeWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QTreeWidget.NoDragDrop = QTreeWidget_Wrapper.NoDragDrop;
QTreeWidget.DragOnly = QTreeWidget_Wrapper.DragOnly;
QTreeWidget.DropOnly = QTreeWidget_Wrapper.DropOnly;
QTreeWidget.DragDrop = QTreeWidget_Wrapper.DragDrop;
QTreeWidget.InternalMove = QTreeWidget_Wrapper.InternalMove;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTreeWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTreeWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      