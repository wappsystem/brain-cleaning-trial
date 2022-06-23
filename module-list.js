(function(){
    var modules={
        "panel-main-osa-clean":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child-osa-clean":              {url:"$H/m/panel-child.html"},
        "panel-setup-osa-clean":              {url:"$H/m/panel-setup.html"},
        "panel-library-osa-clean":    		{url:"$H/m/panel-library.html",router:1},
        "panel-export-screening-osa-clean":   {url:"$H/m/export/panel-export-screened.html",router:1},
        "panel-export-enrolled-osa-clean":    {url:"$H/m/export/panel-export-enrolled.html",router:1},
        "export-data":		                {url:"$H/m/export/export-data.html",Table:"export-osa-clean",form_module:"export-form"},
        "export-form":		                {url:"$H/m/export/export-form.html",Table:"export-osa-clean"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"participant-osa-clean",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-osa-clean",
                                                questionnaire_setup:"online-questionnaire-setup-osa-clean",
                                                online_questionnaire:"online-questionnaire-app-osa-clean",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                                                participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB",
                                            },
       "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"participant-osa-clean"},

        "online-questionnaire-setup-osa-clean": {url:"$H/m/oq-setup.html",Table:"participant-osa-clean"},
        "online-questionnaire-app-osa-clean":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"notes-osa-clean",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"notes-osa-clean"},

        "history-data":  	                    {url:"$H/m/library/history-data.html",form_module:"history-form",task_name:"History Data"},
        "history-form":  	                    {url:"$H/m/library/history-form.html"},

        "site-data-osa-clean":  	            {url:"$H/m/library/site-data.html",Table:"site-osa-clean",form_module:"site-form-osa-clean",task_name:"Site List",router:1},
        "site-form-osa-clean":  	            {url:"$H/m/library/site-form.html",Table:"site-osa-clean",task_name:"Site List"},

        "randomisation-table-data-osa-clean":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-osa-clean",form_module:"randomisation-table-form-osa-clean"},
        "randomisation-table-form-osa-clean":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-osa-clean"},

        "adverse-event-data-osa-clean":		{url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-osa-clean",form_module:"adverse-event-form-osa-clean",task_name:"Unscheduled - Adverse Event"},
        "adverse-event-form-osa-clean":		{url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-osa-clean",task_name:"Unscheduled -  Adverse Event"},
        "withdrawal-data-osa-clean":		{url:"$H/m/library/withdrawal-data.html",Table:"withdrawal-osa-clean",form_module:"withdrawal-form-osa-clean",task_name:"Unscheduled - Withdrawal"},
        "withdrawal-form-osa-clean":		{url:"$H/m/library/withdrawal-form.html",Table:"withdrawal-osa-clean",task_name:"Unscheduled - Withdrawal"},
        "concom-medication-data-osa-clean":		{url:"$H/m/library/concom-medication-data.html",Table:"concom-medication-osa-clean",form_module:"concom-medication-form-osa-clean",task_name:"Unscheduled - Concomitant Medication"},
        "concom-medication-form-osa-clean":		{url:"$H/m/library/concom-medication-form.html",Table:"concom-medication-osa-clean",task_name:"Unscheduled - Concomitant Medication"},
        "file-notes-data-osa-clean":		{url:"$H/m/library/file-notes-data.html",Table:"file-notes-osa-clean",form_module:"file-notes-form-osa-clean",task_name:"Unscheduled - File Notes"},
        "file-notes-form-osa-clean":		{url:"$H/m/library/file-notes-form.html",Table:"file-notes-osa-clean",task_name:"Unscheduled - File Notes"},
//Screening
        "date-s-data-osa-clean":                {url:"$H/m/library/date-data.html",Table:"date-s-osa-clean",form_module:"date-s-form-osa-clean",task_name:"Screening - Visit Date"},
        "date-s-form-osa-clean":                {url:"$H/m/library/date-form.html",Table:"date-s-osa-clean",task_name:"Screening - Visit Date"},
        "consent-s-data-osa-clean":		        {url:"$H/m/library/consent-data.html",Table:"consent-s-osa-clean",form_module:"consent-s-form-osa-clean",task_name:"Screening - Consent Form"},
        "consent-s-form-osa-clean":		        {url:"$H/m/library/consent-form.html",Table:"consent-s-osa-clean",task_name:"Screening -  Consent Form"},
        "anthropometry-s-data-osa-clean":		        {url:"$H/m/library/anthropometry-data.html",Table:"anthropometry-s-osa-clean",form_module:"anthropometry-s-form-osa-clean",task_name:"Screening - Anthropometry"},
        "anthropometry-s-form-osa-clean":		        {url:"$H/m/library/anthropometry-form.html",Table:"anthropometry-s-osa-clean",task_name:"Screening - Anthropometry"},
        "in-ex-s-data-osa-clean":	            {url:"$H/m/library/inclusion-exclusion-data.html",Table:"in-ex-s-osa-clean",form_module:"in-ex-s-form-osa-clean",task_name:"Screening - Inclusion/ Exclusion Criteria"},
        "in-ex-s-form-osa-clean":	            {url:"$H/m/library/inclusion-exclusion-form.html",Table:"in-ex-s-osa-clean",task_name:"Screening - Inclusion/ Exclusion Criteria"},
        "medication-s-data-osa-clean":	    {url:"$H/m/library/medication-data.html",Table:"medication-s-osa-clean",form_module:"medication-s-form-osa-clean",task_name:"Screening - Medication History"},
        "medication-s-form-osa-clean":	    {url:"$H/m/library/medication-form.html",Table:"medication-s-osa-clean",task_name:"Screening - Medication History"},
        "medical-history-s-data-osa-clean":	    {url:"$H/m/library/medical-history-data.html",Table:"medical-history-s-osa-clean",form_module:"medical-history-s-form-osa-clean",task_name:"Screening - Medical History"},
        "medical-history-s-form-osa-clean":	    {url:"$H/m/library/medical-history-form.html",Table:"medical-history-s-osa-clean",task_name:"Screening - Medical History"},
        "ess-s-data-osa-clean":                {url:"$H/m/library/ess-data.html",Table:"ess-s-osa-clean",form_module:"ess-s-form-osa-clean",task_name:"Screening - Epworth Sleepiness Scale (ESS)"},
        "ess-s-form-osa-clean":                {url:"$H/m/library/ess-form.html",Table:"ess-s-osa-clean",task_name:"Screening - Epworth Sleepiness Scale (ESS)"},
        "cpap-withdrawal-s-data-osa-clean":	    {url:"$H/m/library/cpap-withdrawal-long-data.html",Table:"cpap-withdrawal-s-osa-clean",form_module:"cpap-withdrawal-s-form-osa-clean",task_name:"Screening - CPAP Withdrawal Questionnaire"},
        "cpap-withdrawal-s-form-osa-clean":	    {url:"$H/m/library/cpap-withdrawal-long-form.html",Table:"cpap-withdrawal-s-osa-clean",task_name:"Screening - CPAP Withdrawal Questionnaire"},
        "psg-report-s-data-osa-clean":{url:"$H/m/library/upload-file-data.html",Table:"psg-report-s-osa-clean",form_module:"psg-report-s-form-osa-clean",task_name:"Screening - PSG Diagnostic Report – Upload"},
        "psg-report-s-form-osa-clean":{url:"$H/m/library/upload-file-form.html",Table:"psg-report-s-osa-clean",task_name:"Screening - PSG Diagnostic Report – Upload"},
        "cpap-compliance-s-data-osa-clean":{url:"$H/m/library/upload-file-data.html",Table:"cpap-compliance-s-osa-clean",form_module:"cpap-compliance-s-form-osa-clean",task_name:"Screening - CPAP Compliance – Upload"},
        "cpap-compliance-s-form-osa-clean":{url:"$H/m/library/upload-file-form.html",Table:"cpap-compliance-s-osa-clean",task_name:"Screening - CPAP Compliance – Upload"},
//Visit 1
        "date-v1-data-osa-clean":                {url:"$H/m/library/date-data.html",Table:"date-v1-osa-clean",form_module:"date-v1-form-osa-clean",task_name:"Visit #1 - Visit Date"},
        "date-v1-form-osa-clean":                {url:"$H/m/library/date-form.html",Table:"date-v1-osa-clean",task_name:"Visit #1 - Visit Date"},
        "anthropometry-v1-data-osa-clean":		        {url:"$H/m/library/anthropometry-data.html",Table:"anthropometry-v1-osa-clean",form_module:"anthropometry-v1-form-osa-clean",task_name:"Visit #1 - Anthropometry"},
        "anthropometry-v1-form-osa-clean":		        {url:"$H/m/library/anthropometry-form.html",Table:"anthropometry-v1-osa-clean",task_name:"Visit #1 - Anthropometry"},
        "medication-v1-data-osa-clean":	    {url:"$H/m/library/medication-data.html",Table:"medication-v1-osa-clean",form_module:"medication-v1-form-osa-clean",task_name:"Visit #1 - Medication History"},
        "medication-v1-form-osa-clean":	    {url:"$H/m/library/medication-form.html",Table:"medication-v1-osa-clean",task_name:"Visit #1 - Medication History"},
        "medical-history-v1-data-osa-clean":	    {url:"$H/m/library/medical-history-data.html",Table:"medical-history-v1-osa-clean",form_module:"medical-history-v1-form-osa-clean",task_name:"Visit #1 - Medical History"},
        "medical-history-v1-form-osa-clean":	    {url:"$H/m/library/medical-history-form.html",Table:"medical-history-v1-osa-clean",task_name:"Visit #1 - Medical History"},
        "ess-v1-data-osa-clean":                {url:"$H/m/library/ess-data.html",Table:"ess-v1-osa-clean",form_module:"ess-v1-form-osa-clean",task_name:"Visit #1 - Epworth Sleepiness Scale (ESS)"},
        "ess-v1-form-osa-clean":                {url:"$H/m/library/ess-form.html",Table:"ess-v1-osa-clean",task_name:"Visit #1 - Epworth Sleepiness Scale (ESS)"},
        "sleep-diary-v1-data-osa-clean":	    {url:"$H/m/library/sleep-diary-long-data.html",Table:"sleep-diary-v1-osa-clean",form_module:"sleep-diary-v1-form-osa-clean",task_name:"Visit #1 - AASM 2-week Sleep Diary"},
        "sleep-diary-v1-form-osa-clean":	    {url:"$H/m/library/sleep-diary-long-form.html",Table:"sleep-diary-v1-osa-clean",task_name:"Visit #1 - AASM 2-week Sleep Diary"},
//Visit 2
        "date-v2-data-osa-clean":                {url:"$H/m/library/date-data.html",Table:"date-v2-osa-clean",form_module:"date-v2-form-osa-clean",task_name:"Visit #2 - Visit Date"},
        "date-v2-form-osa-clean":                {url:"$H/m/library/date-form.html",Table:"date-v2-osa-clean",task_name:"Visit #2 - Visit Date"},
        "anthropometry-v2-data-osa-clean":		        {url:"$H/m/library/anthropometry-data.html",Table:"anthropometry-v2-osa-clean",form_module:"anthropometry-v2-form-osa-clean",task_name:"Visit #2 - Anthropometry"},
        "anthropometry-v2-form-osa-clean":		        {url:"$H/m/library/anthropometry-form.html",Table:"anthropometry-v2-osa-clean",task_name:"Visit #2 - Anthropometry"},
        "medication-v2-data-osa-clean":	    {url:"$H/m/library/medication-data.html",Table:"medication-v2-osa-clean",form_module:"medication-v2-form-osa-clean",task_name:"Visit #2 - Medication History"},
        "medication-v2-form-osa-clean":	    {url:"$H/m/library/medication-form.html",Table:"medication-v2-osa-clean",task_name:"Visit #2 - Medication History"},
        "medical-history-v2-data-osa-clean":	    {url:"$H/m/library/medical-history-data.html",Table:"medical-history-v2-osa-clean",form_module:"medical-history-v2-form-osa-clean",task_name:"Visit #2 - Medical History"},
        "medical-history-v2-form-osa-clean":	    {url:"$H/m/library/medical-history-form.html",Table:"medical-history-v2-osa-clean",task_name:"Visit #2 - Medical History"},
        "ess-v2-data-osa-clean":                {url:"$H/m/library/ess-data.html",Table:"ess-v2-osa-clean",form_module:"ess-v2-form-osa-clean",task_name:"Visit #2 - Epworth Sleepiness Scale (ESS)"},
        "ess-v2-form-osa-clean":                {url:"$H/m/library/ess-form.html",Table:"ess-v2-osa-clean",task_name:"Visit #2 - Epworth Sleepiness Scale (ESS)"},
        "sleep-diary-v2-data-osa-clean":	    {url:"$H/m/library/sleep-diary-long-data.html",Table:"sleep-diary-v2-osa-clean",form_module:"sleep-diary-v2-form-osa-clean",task_name:"Visit #2 - AASM 2-week Sleep Diary"},
        "sleep-diary-v2-form-osa-clean":	    {url:"$H/m/library/sleep-diary-long-form.html",Table:"sleep-diary-v2-osa-clean",task_name:"Visit #2 - AASM 2-week Sleep Diary"},
}
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
