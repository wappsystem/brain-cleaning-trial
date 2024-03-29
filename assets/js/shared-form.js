//-------------------------------------
var participant_name=function(record){ 
    console.log(JSON.stringify(record))
        if(record.Data.Randomisation_Number!=undefined && record.Data.Randomisation_Number!='') {console.log("A"); return record.Data.Randomisation_Number; }
        else if(record.Data.Screening_Number!=undefined && record.Data.Screening_Number!='') {console.log("B"); return record.Data.Screening_Number; }
        else return record.UID;}
//-------------------------------------
var query;
//auto select particpant
var autocomplete_req_p={cmd:"find",table:$vm.module_list['participant-data'].Table,options:{},skip:0,limit:10}
var autocomplete_callback_p=function(items){ $("#F__ID input[name=Participant_uid]").val(items["UID"]);}
var autocomplete_list_p=function(records){
    var items=[];
    for(var i=0;i<records.length;i++){
        var obj={};
        if(records[i].Data.Randomisation_Number!= undefined  && records[i].Data.Randomisation_Number!='' ) obj.label=records[i].Data.Randomisation_Number;
        else if(records[i].Data.Screening_Number!=undefined && records[i].Data.Screening_Number!='') obj.label=records[i].Data.Screening_Number;
        else obj.label=records[i].UID;
        obj['UID']=records[i].UID;
        items.push(obj);
    }
    return items;
}
var wait1=function(){
    $vm.autocomplete($('#Participant__ID'),autocomplete_req_p,autocomplete_list_p,autocomplete_callback_p);
}
var I=0; var loop_1=setInterval(function (){
    if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_1); wait1(); }
    I++; if(I>50){ clearInterval(loop_1); alert("jquery-ui.min.js is not installed."); }
},100);
//-------------------------------------
//auto fill participant
var load=m.load;
m.load=function(){
    load();
    console.log(JSON.stringify(m.input))
    $('#title__ID').text($vm.module_list[$vm.vm['__ID'].name].task_name);
    if($vm.online_questionnaire==1) {
        $('#pdf__ID').hide();
        $('#participant_div__ID').hide();
        $('#status_div__ID').hide()
    }
    //--------------------------
    if(m.input!=undefined && m.input.participant_record!=undefined){
        //new from child panel
        console.log('New from child panel')
        $("#F__ID input[name=Participant]").val(participant_name(m.input.participant_record));
        $("#F__ID input[name=Participant_uid]").val(m.input.participant_record.UID);
        //$('#modify_reason_div__ID').css('display','none');
        //$('#modify_reason__ID').removeAttr('required');
    }
    else if(m.input!=undefined && m.input.record!=undefined){
        console.log('Modify')
        //$('#modify_reason_div__ID').css('display','block')
        //$('#modify_reason__ID').attr('required', '');
        //$('#modify_reason__ID').val("");
        //$('#modify_reason_other__ID').val("");
        //modify
    }
    else{
        console.log('New from main panel')
        //$('#modify_reason_div__ID').css('display','none');
        //$('#modify_reason__ID').removeAttr('required');
        //new with no parent
    }
    //--------------------------
    var wait2=function(){
        $('#F__ID input[name=Participant]').prop('readonly',false);
        $('#F__ID input[name=Participant]').autocomplete( "enable" );
        if($("#F__ID input[name=Participant_uid]").val()!=''){
            $('#F__ID input[name=Participant]').prop('readonly',true);
            $('#F__ID input[name=Participant]').autocomplete( "disable" );
        }
    }
    //--------------------------
    var I2=0, loop_2=setInterval(function (){
        if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_2); wait2(); }
        I2++; if(I2>50){ clearInterval(loop_2); alert("jquery-ui.min.js is not installed.");}
    },100);
    //-------------------------------------
    if(m.load_2!=undefined) m.load_2();
}
//-------------------------------------
m.before_submit=function(data){
    if ($("#F__ID input[name=Participant]").val()=='' || $("#F__ID input[name=Participant_uid]").val()==''){
        $vm.alert("Please select a participant. Make sure Participant ID has a number.") 
        return false;    
    }
    if($("#F__ID input[name=_status]:checked").val()=='' || $("#F__ID input[name=_status]:checked").val()==undefined)
        data.sysStatus=status_of_data(data);
    else data.sysStatus=$("#F__ID input[name=_status]:checked").val()
}
//-------------------------------------
var status_of_data=function(data){
    var N1=0,N2=0;
    for(key in data){
        if(key!="" && key!="Participant" && key!="Participant_uid" && key!="sysStatus" && key!="_status" && key!="Modify_Reason" && key!="Modify_Reason_other"){
            console.log(key+',')//+' - '+ data[key]);
            N2++;
            if(data[key]=='') N1++;
        }
    }
    var status="#FFCC00";
    if(N1==N2)  status='#FF0000';
    else if(N1==0  || $vm.online_questionnaire==1)  	status='#00FF00';
    return status;
}
//-------------------------------------
