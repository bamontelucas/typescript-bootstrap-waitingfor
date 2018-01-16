"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WaitingDialog = /** @class */ (function () {
    function WaitingDialog(message) {
        this.message = message || '';
        this.dialog = $("\n            <div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"padding-top:15%; overflow-y:visible;\">\n                <div class=\"modal-dialog modal-m\">            \n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h3 style=\"margin:0;\"></h3>\n                        </div>\n                        <div class=\"modal-body\">\n                            <div class=\"progress progress-striped active\" style=\"margin-bottom:0;\">\n                                <div class=\"progress-bar\" style=\"width: 100%\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>");
    }
    WaitingDialog.prototype.show = function (options) {
        var $dialog = this.dialog;
        // Assigning defaults
        if (typeof options === 'undefined') {
            options = {};
        }
        var message = options.message;
        delete options.message;
        if (typeof message === 'undefined') {
            message = this.message || 'Loading';
        }
        var settings = $.extend({
            dialogSize: 'm',
            progressType: '',
            onHide: null // This callback runs after the dialog was hidden
        }, options);
        // Configuring dialog
        $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
        $dialog.find('.progress-bar').attr('class', 'progress-bar');
        if (settings.progressType) {
            $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
        }
        $dialog.find('h3').text(message);
        // Adding callbacks
        if (typeof settings.onHide === 'function') {
            $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
                settings.onHide.call($dialog);
            });
        }
        // Opening dialog
        $dialog.modal();
    };
    WaitingDialog.prototype.hide = function () {
        this.dialog.modal('hide');
    };
    return WaitingDialog;
}());
exports.default = WaitingDialog;
