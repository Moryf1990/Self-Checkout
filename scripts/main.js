'use strict';
var $ = require('jquery');

var item1 = $('#item1');
var item2 = $('#item2');
var item3 = $('#item3');
var subtotal = $('#subtotal');
var submit = $('#submit');
var button = $('#button');
var tax = $('#tax');
var total = $('#total');

function calculate(e) {
	e.preventDefault();

	if(item1.val() > 0 && item2.val() > 0 && item3.val() > 0) {
		var item1Value = parseFloat(item1.val());
		var item2Value = parseFloat(item2.val());
		var item3Value = parseFloat(item3.val());
		var subtotalValue = item1Value+item2Value+item3Value;
		$('#subtotal').val(subtotalValue);
	}
}

submit.on('click', calculate);

function totals(e) {
	e.preventDefault();

	if ( parseFloat($('#subtotal').val()) > 0 && parseFloat(tax.val()) >0) {
		var taxValue = parseFloat($('#subtotal').val())*parseFloat(tax.val());
		var totalValue = taxValue + parseFloat($('#subtotal').val());
		$('#total').val(totalValue);

	}
}

submit.on('click', totals);
























