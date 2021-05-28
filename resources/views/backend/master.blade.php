<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('backend.layouts.head')

<body class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">
        @include('backend.layouts.navbar')
        @include('backend.layouts.sidebar')
        <div class="content-page">
            <div class="content">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        @include('backend.layouts.footer')
    </div>
    <!-- ./wrapper -->
    @include('backend.layouts.footer-script')
</body>

</html>