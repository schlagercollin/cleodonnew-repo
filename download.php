<?php
$download = $_GET['downloadText'];
?>

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
        <script src="js/vendor/jquery-1.11.2.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/vendor/jquery-1.11.2.min.js"></script>
        <script src="js/vendor/bootstrap.js"></script>
        <sciprt src="js/vendor/bootstrap.min.js"></script>
    </head>
    <body>
      <!-- Start Navigation Bar -->
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="./index.html">
                  <img src="http://cleodon.com/wp-content/uploads/2016/10/cleodon_logo-FINAL_revised-02.png">
            </a>
          </div>

           <!--Collect the nav links, forms, and other content for toggling-->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="./cloud-employment.html">Cloud Employment</a></li>
              <li><a href="./services.html">Services</a></li>
              <li><a href="./about-us.html">About Us</a></li>
              <li><a href="./contact.html">Contact</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="./schedule-appointment.html">Create an Appointment</a></li>
                </ul>
              </li>
            </ul>
          </div> <!--/.navbar-collapse-->
        </div> <!--/.container-fluid-->
      </nav>
      <!-- End Navigation Bar -->

      <div class="cloud-content-div slant slant-point" style="padding-top: 150px; padding-bottom: 50px; background-image: none; background-color: #0572CC;">
        <div class="content-light">
          <div class="cloud-employment content-center">
            <h1>Download</h1>
            <p style="text-align: center;">
              Click the link below to download your appointment to your calendar.
             </p>

           <a class="mail-info" id="downloadEventLink" download="myEvent.ics" href="<?php echo $download ?>">
             <div id="ics" class="">
               <img src="https://image.flaticon.com/icons/png/512/0/532.png" />Download Event to Calendar
             </div>
           </a><br>

             <a style="text-decoration: none;" href="./index.html">
               <button>
                 Return Home
               </button>
             </a>
           </div>
        </div>
      </div>
      <!--Start End Content -->

          <div class="end-content-div">
            <div class="content-center">
              <div class="row">
                <div class="col-md-4">
                  <a href="./index.html">
                  <img id="bottom-logo" src="http://cleodon.com/wp-content/uploads/2016/10/cleodon_logo-FINAL_revised-02.png">
                  </a>
                  <p style="font: 200 12px Roboto-Thin">Copyright 2016 Cleodon Strategy Group. Website by Mtn. Dog Media.</p>
                </div>
                <div class="col-md-4">
                  <nav class="navigation-end">
                    <ul>
                      <li><a class="end-nav-item" href="./cloud-employment.html">Cloud Employment</a></li>
                      <li><a class="end-nav-item" href="./services.html">Services</a></li>
                      <li><a class="end-nav-item" href="./about-us.html">About Us</a></li>
                      <li><a class="end-nav-item" href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
                </div>
                <div class="col-md-4">
                  <ul class="social-buttons" id="demo2" >
                    <li>
                      <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x fa-inverse"></i>
                        <i class="fa fa-facebook fa-stack-1x" style="margin-left: 6px;"></i>
                      </a>
                      </span>
                    </li>
                    <li>
                      <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x fa-inverse"></i>
                        <i class="fa fa-twitter fa-stack-1x" style="margin-left: 6px;"></i>
                      </span>
                    </a>
                    </li>
                    <li>
                      <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x fa-inverse"></i>
                        <i class="fa fa-linkedin fa-stack-1x" style="margin-left: 6px;"></i>
                      </span>
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h5>
                <i>Disclaimer</i>
      All that we do is submitted and performed with the clear understanding that we are not engaged in rendering legal, accounting, tax or any other professional service. If legal advice or any other expert assistance is required, the service of a professional in that field should be sought.
      <br><br>
      The information, ideas and suggestions contained on this website, or in any of our materials, have been developed from sources including publications and research, that are considered to be reliable, but cannot be guaranteed insofar as they apply to any individual, corporate or other legal entity or taxpayer. Moreover, because of the technical nature of the materials, and the fact that laws and statutes are never static but rather, ever changing, Cleodon Strategy Group, LLC, its employees, officers, directors, subsidiaries, affiliated companies, and agents specifically disclaim any liability for any loss or risk, personal or otherwise, that is incurred as a consequence of the use or application of any information contained on this website or in any other materials, publications, lectures, or communications.
              </h5>
            </div>
          </div>







          </body>
      </html>
