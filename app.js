document.addEventListener('DOMContentLoaded', function() {
  var PAGE = {
    $recommendationTypes: document.querySelector('[data-recommendation-types]')
  };

  var toggleRecommendationTypeClass = function() {
    var selectedType = this.options[this.selectedIndex].value;
    this.className = selectedType === 'none' ? 'RecomendationType' : 'RecomendationType--active';
  };

  var init = function(page) {
    page.$recommendationTypes.addEventListener('change', toggleRecommendationTypeClass);
  };

  init(PAGE);
});
