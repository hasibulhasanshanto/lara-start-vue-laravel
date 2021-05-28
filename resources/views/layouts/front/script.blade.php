<!-- Main JS -->
<script src="{{ asset('js/app.js') }}" defer></script>

<!-- Bootstrap core JavaScript -->
<script src="{{ asset('frontend') }}/assets/js/jquery.min.js"></script>
<script src="{{ asset('frontend') }}/assets/js/bootstrap.bundle.min.js"></script>

<!-- Additional Scripts -->
<script src="{{ asset('frontend') }}/assets/js/custom.js"></script>
<script src="{{ asset('frontend') }}/assets/js/owl.js"></script>
<script src="{{ asset('frontend') }}/assets/js/slick.js"></script>
<script src="{{ asset('frontend') }}/assets/js/isotope.js"></script>
<script src="{{ asset('frontend') }}/assets/js/accordions.js"></script>

<script language="text/Javascript">
    cleared[0] = cleared[1] = cleared[2] = 0; 
      function clearField(t){ 
      if(! cleared[t.id]){ 
          cleared[t.id] = 1;
          t.value='';
          t.style.color='#fff';
          }
      }
</script>