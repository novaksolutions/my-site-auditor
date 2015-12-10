jQuery(document).on('click', '#seogroup-scan_form input[type=submit]',
	function(){		
		$(document).trigger('auditrequested');
		monitorForAudit();
	}
);

function monitorForAudit(){
	if(){
		$(document).trigger('auditreceived');
	} else {
		setTimeout(monitorForAudit, 1000);
	}
}

jQuery(document).on('click', '#seogroup-scan_form input[type=submit]',
	function(){		
		$(document).trigger('auditreceived');
	}
);


jQuery(
	function(){
		jQuery(document).on('auditrequested', function(){alert('Audit Requested')});
	}
);

var beforeShowEvent = $.Event('beforeshow.tab');
$tab.trigger(beforeShowEvent);

if (beforeShowEvent.result !== false) {
  // show the tab
}

$(document).on('beforeshow.tab', '.special', function(){
  return confirm('Are you ready to show this special tab?');
});