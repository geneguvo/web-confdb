
Ext.define("Demo110315.view.edsource.EDSource",{
    extend: "Ext.panel.Panel",

    controller: "edsource-edsource",
    viewModel: {
        type: "edsource-edsource"
    },

    alias: 'widget.edsourcetab',
    
    listeners:{
        loadESModules: 'onLoadEDSource'
    },
    
    reference: 'edSourceTab',
    
    layout:{
        type: 'border'
    },
    
    items:[
        {
            xtype: 'toolbar',
            region: 'north',
            paddingLeft: 5,
            items:[ 
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Search',
                        labelWidth: 47,
                        enableKeyEvents: true,
                        disabled: true
                    }
                ]
        },
        {
            region: 'west',
            flex: 1,
            split: true,
            xtype: 'edsourcegrid',
            height: '100%',
    //        collapsible: true,
            loadMask: true,
            listeners:{
                custGridEDSourceParams: 'onGridEDSourceParamsForward',
                render: 'onLoadEDSource',
//                loadModules: 'onLoadEDSource',
                afterrender: 'onEDSourceGridRender'
                //scope: 'controller'
            }
        },
        {
        region: 'center',
        layout: 'fit',
        xtype: 'edsourceparamstree',
        title: 'Parameters',
        split: true,
        height: '100%',
        width: '50%',
        loadMask: true
        
    }
    ]
});
