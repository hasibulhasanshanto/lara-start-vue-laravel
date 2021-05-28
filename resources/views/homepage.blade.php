<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        rel="stylesheet">

    <title>Sixteen Clothing</title>

    @include('layouts.front.css')

</head>

<body>

    <!-- ***** Preloader Start ***** -->
    @include('layouts.front.preloader')

    <div id="app">
        <!-- ***** Preloader End ***** -->

        @include('layouts.front.navbar')

        <!-- Page Content -->

        <router-view></router-view>


        @include('layouts.front.footer')
    </div>
    <!-- Scripts -->
    @include('layouts.front.script')
</body>

</html>