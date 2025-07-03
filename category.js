<script>
  const minRange = document.getElementById('minRange');
  const maxRange = document.getElementById('maxRange');
  const minPriceVal = document.getElementById('minPriceVal');
  const maxPriceVal = document.getElementById('maxPriceVal');
  const minSelectedVal = document.getElementById('minSelectedVal');
  const maxSelectedVal = document.getElementById('maxSelectedVal');

  function updateSlider() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal];
      minRange.value = minVal;
      maxRange.value = maxVal;
    }

    minPriceVal.textContent = `$${minVal}`;
    maxPriceVal.textContent = `$${maxVal}`;
    minSelectedVal.textContent = `$${minVal}`;
    maxSelectedVal.textContent = `$${maxVal}`;
  }

  updateSlider(); // initial setup







</script>




