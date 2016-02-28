/*

simple dialog component using hyperscript

thanks to

https://github.com/yuanqing/modal
http://www.queness.com/post/1696/create-a-beautiful-looking-custom-dialog-box-with-jquery-and-css3
https://github.com/dominictarr/hyperscript

*/
var style = {
  modal: {
    background: 'rgba(0,0,0,.25)'
  },
  dialog: {
    'box-shadow': '0px 0px 10px rgba(0, 0, 0, 0.5)',
    'border-radius': '5px',
    width: '300px',
    margin: '25px 0',
    background: '#fff'
  },
  content: {
    'text-align': 'left',
    padding: '10px',
    margin: '13px',
    color: '#666',
    'font-family': 'arial',
    'font-size': '11px'
  },
  button: {
    margin: '0px auto 0 auto',
    'margin-bottom': '10px',
    'text-align': 'center',
    display: 'block',
    width: '50px',
    padding: '5px 10px 6px',
    color: '#fff',
    'text-decoration': 'none',
    'font-weight': 'bold',
    'line-weight': 1,
    'background-color': 'midnightblue',
    'border-radius': '5px',
    'box-shadow': '0 1px 3px rgba(0,0,0,0.5)',
    'text-shadow': '0 -1px 1px rgba(0,0,0,0.25)',
    'border-bottom': '1px solid rgba(0,0,0,0.25)',
    'position': 'relative',
    'cursor': 'pointer'
  }
}
/*
.modal__dialog button:hover {
	background-color: #c33100;
}
*/

var h = require('hyperscript')
var modal = require('./modal')

module.exports = function xdialog(contents, btnText) {
  var markup = h('.modal', {style: style.modal}, [
    h('.modal__dialog', { style: style.dialog }, [
      h('div', { style: style.content }, [contents]),
      h('button.js-modal-hide', { style: style.button }, [btnText])
    ])
  ])
  document.body.appendChild(markup)
  var m = modal(markup, {
    showSelector: '.js-modal-show',
    hideSelector: '.js-modal-hide',
    dialogSelector: '.modal__dialog',
    fade: {
      duration: '.2s',
      timingFunction: 'ease'
    }
  })
  return m
}
