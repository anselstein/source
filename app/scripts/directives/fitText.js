'use strict';

angular.module('anselstein.comApp')
  .directive('fitText', function () {
    return function postLink($scope, $element, $attrs) {

        var opt = {};

        if($attrs.minFontSize){
	       opt.minFontSize = $attrs.minFontSize;
        }

        if($attrs.maxFontSize){
	       opt.maxFontSize = $attrs.maxFontSize;
        }

        $element.fitText($attrs.kompressor || 1, opt);
        console.log($element);
      };
  });
