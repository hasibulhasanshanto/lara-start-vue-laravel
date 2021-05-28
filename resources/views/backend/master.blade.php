<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('layouts.head')

<body class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">
        @include('layouts.navbar')
        @include('layouts.sidebar')
        <div class="content-page">
            <div class="content">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        @include('layouts.footer')
    </div>
    <!-- ./wrapper -->
    @include('layouts.footer-script')
</body>

</html>