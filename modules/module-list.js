(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    m[p+"participant-data"] ={url:H+"/form-grid/participant/participant-data.html",Table:"participant-osa-clean"
                            ,form_module:"participant-form",
                            child_panel:"panel-child",
                            online_questionnaire_s:"oq-s",
                            online_questionnaire_v1:"oq-v1",
                            online_questionnaire_v2:"oq-v2",
                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                            participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB",
                            task_name:"Participants Data",
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"participant-osa-clean",task_name:"Participant's Details"},
    m[p+"notes-data"]       ={url:H+"/form-grid/form-grid/backend/notes-data.html",Table:"notes-osa-clean",form_module:"notes-form",router:1},
    m[p+"notes-form"]       ={url:H+"/form-grid/form-grid/backend/notes-form.html",Table:"notes-osa-clean"},
    m[p+"oq-s"] ={url:I+"/oq-s.html"},
    m[p+"oq-v1"] ={url:I+"/oq-v1.html"},
    m[p+"oq-v2"] ={url:I+"/oq-v2.html"},
    m[p+"panel-main"]=    	        {url:H+"/panels/main.html",router:1},
    m[p+"panel-child"]=              {url:H+"/panels/child.html"},
    m[p+"panel-oq-s"]=              {url:H+"/panels/oq-s.html"},
    m[p+"panel-oq-v1"]=              {url:H+"/panels/oq-v1.html"},
    m[p+"panel-oq-v2"]=              {url:H+"/panels/oq-v2.html"},
    m[p+"panel-export-screening"]=   {url:H+"/panels/export/panel-export-screened.html",router:1},
    m[p+"panel-export-enrolled"]=    {url:H+"/panels/export/panel-export-enrolled.html",router:1},

    m[p+"panel-export-screening"] ={url:H+"/panels/export/panel-export-screened.html",router:1},
    m[p+"panel-export-enrolled"]  ={url:H+"/panels/export/panel-export-enrolled.html",router:1},
    m[p+"export-data"]  ={url:H+"/export/export-data.html",Table:"export-osa-clean",form_module:"export-form"},
    m[p+"export-form"]  ={url:H+"/export/export-form.html",Table:"export-osa-clean"},



    m[p+"history-data"] 	                    ={url:H+"/form-grid/backend/history-data.html",form_module:"history-form",task_name:"History Data"},
    m[p+"history-form"] 	                    ={url:H+"/form-grid/backend/history-form.html"},

    m[p+"site-data"] 	            ={url:H+"/form-grid/backend/site-data.html",Table:"site-osa-clean",form_module:"site-form",task_name:"Site List",router:1},
    m[p+"site-form"] 	            ={url:H+"/form-grid/backend/site-form.html",Table:"site-osa-clean",task_name:"Site List"},

    m[p+"randomisation-table-data"]	={url:H+"/form-grid/backend/randomisation-table-data.html",Table:"randomisation-table-osa-clean",form_module:"randomisation-table-form-osa-clean"},
    m[p+"randomisation-table-form"]	={url:H+"/form-grid/backend/randomisation-table-form.html",Table:"randomisation-table-osa-clean"},

    m[p+"pre-withdrawal-data"]	={url:H+"/form-grid/backend/withdrawal-data.html",Table:"pre-withdrawal-osa-clean",form_module:"pre-withdrawal-form",task_name:"Pre Study Withdrawal"},
    m[p+"pre-withdrawal-form"]	={url:H+"/form-grid/backend/withdrawal-form.html",Table:"pre-withdrawal-osa-clean",task_name:"Pre Study Withdrawal"},

    m[p+"adverse-event-data"]	={url:H+"/form-grid/backend/adverse-event-data.html",Table:"adverse-event-osa-clean",form_module:"adverse-event-form",task_name:"Unscheduled - Adverse Event"},
    m[p+"adverse-event-form"]	={url:H+"/form-grid/backend/adverse-event-form.html",Table:"adverse-event-osa-clean",task_name:"Unscheduled -  Adverse Event"},
    m[p+"withdrawal-data"]	={url:H+"/form-grid/backend/withdrawal-data.html",Table:"withdrawal-osa-clean",form_module:"withdrawal-form",task_name:"Unscheduled - Withdrawal"},
    m[p+"withdrawal-form"]	={url:H+"/form-grid/backend/withdrawal-form.html",Table:"withdrawal-osa-clean",task_name:"Unscheduled - Withdrawal"},
    m[p+"concom-medication-data"]	={url:H+"/form-grid/backend/concom-medication-data.html",Table:"concom-medication-osa-clean",form_module:"concom-medication-form",task_name:"Unscheduled - Concomitant Medication"},
    m[p+"concom-medication-form"]	={url:H+"/form-grid/backend/concom-medication-form.html",Table:"concom-medication-osa-clean",task_name:"Unscheduled - Concomitant Medication"},
    m[p+"file-notes-data"]	={url:H+"/form-grid/backend/file-notes-data.html",Table:"file-notes-osa-clean",form_module:"file-notes-form",task_name:"Unscheduled - File Notes"},
    m[p+"file-notes-form"]	={url:H+"/form-grid/backend/file-notes-form.html",Table:"file-notes-osa-clean",task_name:"Unscheduled - File Notes"},
//Screening
    m[p+"date-s-data"]               ={url:H+"/form-grid/backend/date-data.html",Table:"date-s-osa-clean",form_module:"date-s-form",task_name:"Screening - Visit Date"},
    m[p+"date-s-form"]               ={url:H+"/form-grid/backend/date-form.html",Table:"date-s-osa-clean",task_name:"Screening - Visit Date"},
    m[p+"consent-s-data"]	        ={url:H+"/form-grid/backend/consent-data.html",Table:"consent-s-osa-clean",form_module:"consent-s-form",task_name:"Screening - Consent Form"},
    m[p+"consent-s-form"]	        ={url:H+"/form-grid/backend/consent-form.html",Table:"consent-s-osa-clean",task_name:"Screening -  Consent Form"},
    m[p+"anthropometry-s-data"]	        ={url:H+"/form-grid/backend/anthropometry-data.html",Table:"anthropometry-s-osa-clean",form_module:"anthropometry-s-form",task_name:"Screening - Anthropometry"},
    m[p+"anthropometry-s-form"]	        ={url:H+"/form-grid/backend/anthropometry-form.html",Table:"anthropometry-s-osa-clean",task_name:"Screening - Anthropometry"},
    m[p+"in-ex-s-data"]            ={url:H+"/form-grid/backend/inclusion-exclusion-data.html",Table:"in-ex-s-osa-clean",form_module:"in-ex-s-form",task_name:"Screening - Inclusion/ Exclusion Criteria"},
    m[p+"in-ex-s-form"]            ={url:H+"/form-grid/backend/inclusion-exclusion-form.html",Table:"in-ex-s-osa-clean",task_name:"Screening - Inclusion/ Exclusion Criteria"},
    m[p+"medication-s-data"]    ={url:H+"/form-grid/backend/medication-data.html",Table:"medication-s-osa-clean",form_module:"medication-s-form",task_name:"Screening - Medication History"},
    m[p+"medication-s-form"]    ={url:H+"/form-grid/backend/medication-form.html",Table:"medication-s-osa-clean",task_name:"Screening - Medication History"},
    m[p+"medical-history-s-data"]    ={url:H+"/form-grid/backend/medical-history-data.html",Table:"medical-history-s-osa-clean",form_module:"medical-history-s-form",task_name:"Screening - Medical History"},
    m[p+"medical-history-s-form"]    ={url:H+"/form-grid/backend/medical-history-form.html",Table:"medical-history-s-osa-clean",task_name:"Screening - Medical History"},
    m[p+"ess-s-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"ess-s-osa-clean",form_module:"ess-s-form",task_name:"Screening - Epworth Sleepiness Scale (ESS)"},
    m[p+"ess-s-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"ess-s-osa-clean",task_name:"Screening - Epworth Sleepiness Scale (ESS)"},
    m[p+"cpap-withdrawal-s-data"]    ={url:H+"/form-grid/backend/cpap-withdrawal-long-data.html",Table:"cpap-withdrawal-s-osa-clean",form_module:"cpap-withdrawal-s-form",task_name:"Screening - CPAP Withdrawal Questionnaire"},
    m[p+"cpap-withdrawal-s-form"]    ={url:H+"/form-grid/backend/cpap-withdrawal-long-form.html",Table:"cpap-withdrawal-s-osa-clean",task_name:"Screening - CPAP Withdrawal Questionnaire"},
    m[p+"psg-report-s-data"]={url:H+"/form-grid/backend/upload-file-data.html",Table:"psg-report-s-osa-clean",form_module:"psg-report-s-form",task_name:"Screening - PSG Diagnostic Report – Upload"},
    m[p+"psg-report-s-form"]={url:H+"/form-grid/backend/upload-file-form.html",Table:"psg-report-s-osa-clean",task_name:"Screening - PSG Diagnostic Report – Upload"},
    m[p+"cpap-compliance-s-data"] ={url:H+"/form-grid/backend/upload-file-data.html",Table:"cpap-compliance-s-osa-clean",form_module:"cpap-compliance-s-form",task_name:"Screening - CPAP Compliance – Upload"},
    m[p+"cpap-compliance-s-form"] ={url:H+"/form-grid/backend/upload-file-form.html",Table:"cpap-compliance-s-osa-clean",task_name:"Screening - CPAP Compliance – Upload"},
//Visit 1
    m[p+"date-v1-data"]               ={url:H+"/form-grid/backend/date-data.html",Table:"date-v1-osa-clean",form_module:"date-v1-form",task_name:"Visit #1 - Visit Date"},
    m[p+"date-v1-form"]               ={url:H+"/form-grid/backend/date-form.html",Table:"date-v1-osa-clean",task_name:"Visit #1 - Visit Date"},
    m[p+"anthropometry-v1-data"]	        ={url:H+"/form-grid/backend/anthropometry-data.html",Table:"anthropometry-v1-osa-clean",form_module:"anthropometry-v1-form",task_name:"Visit #1 - Anthropometry"},
    m[p+"anthropometry-v1-form"]	        ={url:H+"/form-grid/backend/anthropometry-form.html",Table:"anthropometry-v1-osa-clean",task_name:"Visit #1 - Anthropometry"},
    m[p+"medication-v1-data"]    ={url:H+"/form-grid/backend/medication-data.html",Table:"medication-v1-osa-clean",form_module:"medication-v1-form",task_name:"Visit #1 - Medication History"},
    m[p+"medication-v1-form"]    ={url:H+"/form-grid/backend/medication-form.html",Table:"medication-v1-osa-clean",task_name:"Visit #1 - Medication History"},
    m[p+"medical-history-v1-datan"]    ={url:H+"/form-grid/backend/medical-history-data.html",Table:"medical-history-v1-osa-clean",form_module:"medical-history-v1-form",task_name:"Visit #1 - Medical History"},
    m[p+"medical-history-v1-form"]    ={url:H+"/form-grid/backend/medical-history-form.html",Table:"medical-history-v1-osa-clean",task_name:"Visit #1 - Medical History"},
    m[p+"ess-v1-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"ess-v1-osa-clean",form_module:"ess-v1-form",task_name:"Visit #1 - Epworth Sleepiness Scale (ESS)"},
    m[p+"ess-v1-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"ess-v1-osa-clean",task_name:"Visit #1 - Epworth Sleepiness Scale (ESS)"},
    m[p+"sleep-diary-v1-data"]    ={url:H+"/form-grid/backend/sleep-diary-long-data.html",Table:"sleep-diary-v1-osa-clean",form_module:"sleep-diary-v1-form",task_name:"Visit #1 - AASM 2-week Sleep Diary"},
    m[p+"sleep-diary-v1-form"]    ={url:H+"/form-grid/backend/sleep-diary-long-form.html",Table:"sleep-diary-v1-osa-clean",task_name:"Visit #1 - AASM 2-week Sleep Diary"},
//Visit 2
    m[p+"date-v2-data"]               ={url:H+"/form-grid/backend/date-data.html",Table:"date-v2-osa-clean",form_module:"date-v2-form",task_name:"Visit #2 - Visit Date"},
    m[p+"date-v2-form"]               ={url:H+"/form-grid/backend/date-form.html",Table:"date-v2-osa-clean",task_name:"Visit #2 - Visit Date"},
    m[p+"anthropometry-v2-data"]	        ={url:H+"/form-grid/backend/anthropometry-data.html",Table:"anthropometry-v2-osa-clean",form_module:"anthropometry-v2-form",task_name:"Visit #2 - Anthropometry"},
    m[p+"anthropometry-v2-form"]	        ={url:H+"/form-grid/backend/anthropometry-form.html",Table:"anthropometry-v2-osa-clean",task_name:"Visit #2 - Anthropometry"},
    m[p+"medication-v2-data"]    ={url:H+"/form-grid/backend/medication-data.html",Table:"medication-v2-osa-clean",form_module:"medication-v2-form",task_name:"Visit #2 - Medication History"},
    m[p+"medication-v2-form"]    ={url:H+"/form-grid/backend/medication-form.html",Table:"medication-v2-osa-clean",task_name:"Visit #2 - Medication History"},
    m[p+"medical-history-v2-data"]    ={url:H+"/form-grid/backend/medical-history-data.html",Table:"medical-history-v2-osa-clean",form_module:"medical-history-v2-form",task_name:"Visit #2 - Medical History"},
    m[p+"medical-history-v2-form"]    ={url:H+"/form-grid/backend/medical-history-form.html",Table:"medical-history-v2-osa-clean",task_name:"Visit #2 - Medical History"},
    m[p+"ess-v2-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"ess-v2-osa-clean",form_module:"ess-v2-form",task_name:"Visit #2 - Epworth Sleepiness Scale (ESS)"},
    m[p+"ess-v2-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"ess-v2-osa-clean",task_name:"Visit #2 - Epworth Sleepiness Scale (ESS)"},
    m[p+"sleep-diary-v2-data"]    ={url:H+"/form-grid/backend/sleep-diary-long-data.html",Table:"sleep-diary-v2-osa-clean",form_module:"sleep-diary-v2-form",task_name:"Visit #2 - AASM 2-week Sleep Diary"},
    m[p+"sleep-diary-v2-form"]    ={url:H+"/form-grid/backend/sleep-diary-long-form.html",Table:"sleep-diary-v2-osa-clean",task_name:"Visit #2 - AASM 2-week Sleep Diary"}

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();