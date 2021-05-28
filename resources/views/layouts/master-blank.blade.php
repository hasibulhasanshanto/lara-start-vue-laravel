<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('layouts.head')


<body class="pb-0">
    @yield('content')
    @include('layouts.footer-script')
</body>

</html>