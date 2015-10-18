{% extends "layout.tpl.html" %}

{% block content %}

<body class="outside-bottom-bar-page">
  <!--PRELOADER-->
   <!--END of PRELOADER-->
    
  <!-- MAIN SLIDER -->
  <section id="main-slider" class="flexslider fullscreen">        
    <!-- MAIN SLIDER TITLE OUTTER WRAPPER -->
    <div class="slide-title-outter-wrapper">
      <!-- MAIN SLIDER TITLE INNER WRAPPER -->
      <div class="slide-title-inner-wrapper">
        <!-- TITLE 2 -->
        <div class="slide-title align-middle">          
          <div class="container">
            <div class="row">
              <div class="col-md-offset-3 col-md-6 animation delay1 fadeInUp">
                <div class="banner-text withlove medium light">
                  <h1>Vi skal giftes</h1>
                </div>                                       
                <div id="banner-date">
                  - 9 / Juli / 2016 -
                </div>
              </div> 
            </div>
          </div>        
        </div>               
      </div><!-- END of MAIN SLIDER TITLE INNER WRAPPER -->
    </div> <!-- END of MAIN SLIDER TITLE OUTTER WRAPPER -->
    
    <!-- MAIN SLIDER IMAGES -->
    
    <ul class="slides">
      <li>
        <!-- SLIDE IMAGE -->
        <div data-stellar-ratio="0.5" class="slide-image" style="background-image:url(/assets/images/mogd.jpg); background-position:top center">
        </div>
        
        <!-- SLIDE OVERLAY -->  
        <div class="slide-overlay" style="opacity:0"> </div> 
        
      </li>
    </ul><!-- END of MAIN SLIDER IMAGES -->
  </section><!-- ENF of MAIN SLIDER -->
  <div ng-view="main">
    <!-- NAVIGATION -->
    <header id="nav-header">
      <nav id="nav-bar" class="bottom-bar outside fluid-width block-color nav-center sticky-nav animation fadeIn">

        <div id="nav-wrapper">
          <div id="mobile-nav">
            <i class="de-icon-menu"></i>
          </div>

          <ul id="nav-menu" class="nav-smooth-scroll">
            <li class="first-child">
              <a href="#main-slider">HJEM</a>
            </li>                         
            <li>
              <a href="#our-story">HISTORIEN</a>
            </li>
            <li>
              <a href="#where-when">HVOR &amp; HVORDAN</a>
            </li>
            <li>
              <a href="#gallery-section">GALLERI</a>
            </li>
            <li class="">
              <a href="#more-events">EVENTS</a>
            </li>
            <li>
              <a href="#groomsmen-section">PERSONER</a>
            </li>
            <li>
              <a href="#bridesmaid-section">GÆSTER</a>
            </li>                           
            <li>
              <a href="#rsvp-section">RSVP</a>
            </li>

          </ul>

          <div class="clearboth"></div>

        </div>

      </nav>
    </header> <!-- END of NAVIGATION -->


    <!--CONTENT SECTION-->
    <section id="content">

      <!--COUPLE SECTION-->
      <section id="couple">

        <div class="container">
          <div class="row">

            <!-- SECTION CONTENT -->
            <div class="col-md-6 center-middle">

              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeInLeft w75">

                <!--PHOTO-->
                <img src="/assets/images/mathilde2.jpg" alt="Mathilde" class="hover-animation image-zoom-in">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <!-- <a href="/assets/images/mathilde2.jpg" class="magnific-zoom">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a> -->

                      <a class="magnific-ajax" href="/her">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-link"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->   

              <div class="his-her-name">
                <h2 class="text-center">Mathilde<span class="last-name">-&nbsp;Grøn&nbsp;-</span></h2>                                 
                <!-- <div class="heart-wrapper">
                  <div class="de-icon circle medium-size custom-heart">
                    <i class="de-icon-heart"></i>
                  </div>
                </div> -->
              </div>                            

              <p class="blurb animation fadeInLeft text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
              </p>

            </div>

            <div class="col-md-6 center-middle">

              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeInRight w75">

                <!--PHOTO-->
                <img src="/assets/images/daniel.jpg" alt="Daniel" class="hover-animation image-zoom-in">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <!-- <a href="/assets/images/daniel.jpg" class="magnific-zoom">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a> -->

                      <a class="magnific-ajax" href="/him">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-link"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->    

              <div class="his-her-name">
                <h2 class="text-center">Daniel<span class="last-name">-&nbsp;Harding Knudsen&nbsp;-</span></h2>
              </div>                            

              <p class="blurb animation fadeInRight text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.
              </p>

            </div>
          </div>
        </div>
      </section>  

      <!-- PHOTO DIVIDER -->
      <section id="photo-divider">
        <div class="image-divider fixed-height" style="background-image:url(/assets/images/proposal-point.jpg); height:600px" data-stellar-background-ratio="0.3">
        </div>
      </section>


      <!-- OUR STORY SECTION -->
      <section id="our-story">

        <div class="container">

          <!-- ROW-1 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-sm-12 col-md-offset-2 col-md-8 text-center">

              <div class="section-title animation fadeInUp">
                <h2>
                  VORES <img src="/assets/images/heart-icon.png" alt=""> HISTORIE
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                </p>


              </div>
            </div>
          </div> <!-- END of ROW-1 -->


          <!-- STORY ROW-1-->
          <div class="row story-row">      

            <div class="col-sm-12 col-md-offset-1 col-md-4 text-center">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation delay1 fadeInLeft">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-in">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/500x750" class="magnific-zoom" title="FØRSTE GANG VI MØDTES">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->
            </div>

            <div class="col-sm-12 col-md-2 text-center story-date-wrapper animation fadeIn">
              <div class="arrow-left"></div>
              <div class="story-date">
                <div class="date-only">9</div>
                <div class="month-year">07.11</div>
              </div>
              <div class="arrow-right"></div>
              <div class="clearboth"></div>                          
            </div>

            <div class="col-sm-12 col-md-4 animation delay1 fadeInRight">
              <h3>FØRSTE GANG</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.</p>                            
            </div>    

            <div class="vertical-line">
            </div>

          </div><!-- END of STORY ROW-1 -->

          <!-- STORY ROW-2-->
          <div class="row story-row">      

            <div class="col-sm-12 col-md-4 col-md-push-6 text-center">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation delay1 fadeInLeft">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-in">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom" title="VORES FØRSTE DATE">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>                                                 

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->
            </div>

            <div class="col-sm-12 col-md-2 text-center story-date-wrapper animation fadeIn">
              <div class="arrow-left"></div>
              <div class="story-date">
                <div class="date-only">19</div>
                <div class="month-year">06.12</div>
              </div>
              <div class="arrow-right"></div>
              <div class="clearboth"></div>                          
            </div>

            <div class="col-sm-12 col-md-4 col-md-pull-6 animation delay1 fadeInRight">
              <h3>Vores Første Date</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.</p>                            
            </div>    

            <div class="vertical-line">
            </div>

          </div><!-- END of STORY ROW-2 -->

          <!-- STORY ROW-3-->
          <div class="row story-row">      

            <div class="col-md-offset-1 col-md-4 text-center">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation delay1 fadeInLeft">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-in">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x394" class="magnific-zoom" title="He Proposed">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->
            </div>

            <div class="col-md-2 text-center story-date-wrapper animation fadeIn">
              <div class="arrow-left"></div>
              <div class="story-date">
                <div class="date-only">12</div>
                <div class="month-year">09.14</div>
              </div>
              <div class="arrow-right"></div>
              <div class="clearboth"></div>                          
            </div>

            <div class="col-md-4 animation delay1 fadeInRight">
              <h3>FRIERIET</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.</p>

            </div>    

            <div class="vertical-line">
            </div>

          </div><!-- END of STORY ROW-3 -->

          <!-- STORY ROW-4 -->
          <div class="row story-row">      

            <div class="col-sm-12 col-md-4 col-md-push-6 text-center">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation delay1 fadeInLeft">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-in">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom" title="Love Ring">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->
            </div>

            <div class="col-sm-12 col-md-2 text-center story-date-wrapper animation fadeIn">
              <div class="arrow-left"></div>
              <div class="story-date">
                <div class="date-only">19</div>
                <div class="month-year">10.14</div>
              </div>
              <div class="arrow-right"></div>
              <div class="clearboth"></div>                          
            </div>

            <div class="col-sm-12 col-md-4 col-md-pull-6 animation delay1 fadeInRight">
              <h3>RINGEN</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.</p>                            
            </div>    

            <div class="vertical-line">
            </div>

          </div><!-- END of STORY ROW-4 -->

          <div class="row">
            <div class="col-md-12 text-center">
              <div id="end-of-story" class="animation fadeInUp">
                <h2>...OG NU SKAL VI GIFTES :) </h2>
                <div class="heart-divider">
                  <span class="grey-line"></span>
                  <i class="de-icon-heart pink-heart"></i>
                  <i class="de-icon-heart grey-heart"></i>
                  <span class="grey-line"></span>
                </div>
              </div>
            </div>
          </div>

        </div><!-- END of CONTAINER -->

      </section>  

      <!-- PHOTO DIVIDER -->
      <section id="photo-divider-1">
        <div class="image-divider fixed-height" style="background-image:url(http://placehold.it/1920x1080); height:500px" data-stellar-background-ratio="0.3">
        </div>
      </section>     

      <!-- WHERE WHEN SECTION -->
      <section id="where-when">
        <div class="container">

          <!-- ROW-1 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-md-offset-2 col-md-8 text-center">

              <div class="section-title animation fadeInUp">
                <h2>
                  HVOR <span class="and">&amp;</span> HVORNÅR
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                </p>


              </div>
            </div>
          </div> <!-- END of ROW-1 -->

          <!-- ROW-2 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-md-12 text-center">

              <div class="banner-text dark full animation fadeIn">

                <div class="row">
                  <div class="col-md-4">
                    <h3>9 / JULI / 2016</h3>
                  </div>
                  <div class="col-md-4">
                    <div class="border-column">
                      <h3>KLOKKEN TRETTEN</h3>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h3>VOR FRUE KIRKE, AARHUS</h3>
                  </div>

                </div>


              </div>    

            </div>
          </div> <!-- END of ROW-2 -->


          <!-- ROW-3 -->
          <div class="row">
            <div class="col-md-6 animation fadeIn">

              <div class="de-icon circle small-size inline">
                <i class="de-icon-bell-alt"></i>
              </div>
              <h3 class="inline">CEREMONIEN</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue</p>

              <div class="de-icon circle small-size inline">
                <i class="de-icon-food"></i>
              </div>
              <h3 class="inline">RECEPTIONEN</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue</p>

              <div class="de-icon circle small-size inline">
                <i class="de-icon-home-1"></i>
              </div>
              <h3 class="inline">OVERNATNINGSMULIGHEDER</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue</p>                            

            </div>


            <div class="col-md-6 animation fadeIn">
              <div id="map-canvas" style="border:15px solid #FFF; margin-top:20px;"></div>
            </div>

          </div> <!-- END of ROW-3 -->



        </div>
      </section>

      <section id="attending">
        <div class="image-divider auto-height" style="background-image:url(http://placehold.it/1920x1080);" data-stellar-background-ratio="0.3">

          <div class="divider-overlay"></div>

          <div class="container">                    
            <div class="row">
              <div class="col-md-offset-2 col-md-8 text-center">


                <div class="banner-text withlove large light animation fadeInUp">
                  <h2 class="h1">KOMMER DU OGSÅ?</h2>
                </div>        


                <div class="text-center animation fadeInUp">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.</p>
                </div>  

                <div  class="text-center">
                  <a href="#rsvp-section" class="smooth-scroll de-button outline medium animation fadeInUp">
                    RSVP
                  </a>
                </div>


              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- GALLERY SECTION -->
      <section id="gallery-section">

        <div class="container">

          <!-- ROW-1 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-md-offset-2 col-md-8 text-center">

              <div class="section-title animation fadeInUp">
                <h2>
                  OUR <img src="/assets/images/heart-icon.png" alt=""> GALLERI
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                </p>


              </div>
            </div>
          </div> <!-- END of ROW-1 -->


          <div class="row">     

            <!--GALLERY-ITEM-1-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/500x750" class="magnific-zoom-gallery" title="Attachment-1">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->    
            </div><!--END of GALLERY-ITEM-1-->

            <!--GALLERY-ITEM-2-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x394" class="magnific-zoom-gallery" title="Attachment-2">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->  
            </div><!--END of GALLERY-ITEM-2-->

            <!--GALLERY-ITEM-3-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom-gallery" title="Attachment-3">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->
            </div><!--END of GALLERY-ITEM-3-->

            <!--GALLERY-ITEM-4-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom-gallery" title="Attachment-4">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->   
            </div><!--END of GALLERY-ITEM-4-->

            <!--GALLERY-ITEM-5-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom-gallery" title="Attachment-5">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->  
            </div><!--END of GALLERY-ITEM-5-->

            <!--GALLERY-ITEM-6-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom-gallery" title="Attachment-6">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->
            </div><!--END of GALLERY-ITEM-6-->

            <!--GALLERY-ITEM-7-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom-gallery" title="Attachment-7">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->  
            </div><!--END of GALLERY-ITEM-7-->

            <!--GALLERY-ITEM-8-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom-gallery" title="Attachment-8">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM--> 
            </div><!--END of GALLERY-ITEM-8-->

            <!--GALLERY-ITEM-9-->
            <div class="col-md-4">
              <!--PHOTO-ITEM-->
              <div class="photo-item frame-border animation fadeIn">

                <!--PHOTO-->
                <img src="http://placehold.it/290x290" alt="" class="hover-animation image-zoom-rotate">

                <!--PHOTO OVERLAY-->
                <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                </div><!--END of PHOTO OVERLAY-->

                <!--ICON LINK-->
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">

                      <a href="http://placehold.it/700x467" class="magnific-zoom-gallery" title="Attachment-9">
                        <div class="de-icon circle light medium-size inline">
                          <i class="de-icon-zoom-in"></i>
                        </div>
                      </a>

                    </div>
                  </div>
                </div><!--END of ICON LINK-->

              </div><!--END of PHOTO-ITEM-->
            </div><!--END of GALLERY-ITEM-9-->

          </div>
        </div>
      </section>


      <section id="dont-miss-it">
        <div class="image-divider auto-height" style="background-image:url(http://placehold.it/1920x1080);" data-stellar-background-ratio="0.3">

          <div class="container">                    
            <div class="row">
              <div class="col-md-offset-2 col-md-8">                    

                <h2 id="dont-miss-it-title" class="text-center animation fadeInUp"></h2>                               

                <div class="text-center animation fadeInUp">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae commodo. Phasellus condimentum, mi ut sodales gravida.</p>
                </div>

              </div>
            </div>

            <div class="row">
              <div class="col-md-offset-3 col-md-6">                    

                <div id="date-countdown" class="circle-countdown animation fadeInUp"></div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- MORE EVENTS SECTION -->
      <section id="more-events">

        <div class="container">

          <!-- ROW-1 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-md-offset-2 col-md-8 text-center">

              <div class="section-title animation fadeInUp">
                <h2>
                  MORE <img src="/assets/images/heart-icon.png" alt=""> EVENTS
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                </p>


              </div>
            </div>
          </div> <!-- END of ROW-1 -->

          <!-- ROW-2 -->
          <div class="row">
            <div class="col-md-12">

              <!-- EVENTS CAROUSEL -->
              <div id="events-carousel" class="owl-carousel">

                <!-- ITEM-1 -->
                <div class="item">

                  <!--PHOTO-ITEM-->
                  <div class="photo-item animation fadeIn">

                    <!--PHOTO-->
                    <img src="http://placehold.it/800x533" alt="" class="hover-animation image-zoom-in">

                    <!--PHOTO OVERLAY-->
                    <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                    </div><!--END of PHOTO OVERLAY-->

                    <!--ICON LINK-->
                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                      <div class="alignment">
                        <div class="v-align center-middle">

                          <a href="http://placehold.it/800x533" class="magnific-zoom" title="event-1">
                            <div class="de-icon circle light medium-size inline">
                              <i class="de-icon-zoom-in"></i>
                            </div>
                          </a>

                          <a href="#">
                            <div class="de-icon circle light medium-size inline">
                              <i class="de-icon-link"></i>
                            </div>
                          </a>

                        </div>
                      </div>
                    </div><!--END of ICON LINK-->

                  </div><!--END of PHOTO-ITEM-->

                  <!-- TITLE & EXCERPT -->
                  <div class="title-excerpt animation fadeIn">

                    <h3><a href="#">DANCING PARTY</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna urna, imperdiet et purus ut, ultricies sollicitudin arcu. Cras placerat, arcu non faucibus suscipit, ex arcu consectetur enim.</p>

                  </div><!-- END of TITLE & EXCERPT -->

                </div><!--END of ITEM-1-->  

                <!-- ITEM-2 -->
                <div class="item">

                  <!--PHOTO-ITEM-->
                  <div class="photo-item animation fadeIn">

                    <!--PHOTO-->
                    <img src="http://placehold.it/800x533" alt="" class="hover-animation image-zoom-in">

                    <!--PHOTO OVERLAY-->
                    <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                    </div><!--END of PHOTO OVERLAY-->

                    <!--ICON LINK-->
                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                      <div class="alignment">
                        <div class="v-align center-middle">

                          <a href="http://placehold.it/800x533" class="magnific-zoom" title="event-2">
                            <div class="de-icon circle light medium-size inline">
                              <i class="de-icon-zoom-in"></i>
                            </div>
                          </a>

                          <a href="#">
                            <div class="de-icon circle light medium-size inline">
                              <i class="de-icon-link"></i>
                            </div>
                          </a>

                        </div>
                      </div>
                    </div><!--END of ICON LINK-->

                  </div><!--END of PHOTO-ITEM-->

                  <!-- TITLE & EXCERPT -->
                  <div class="title-excerpt animation fadeIn">

                    <h3><a href="#">FLOWER AND FLOWER</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna urna, imperdiet et purus ut, ultricies sollicitudin arcu. Cras placerat, arcu non faucibus suscipit, ex arcu consectetur enim.</p>

                  </div><!-- END of TITLE & EXCERPT -->

                </div><!--END of ITEM-2-->

                <!-- ITEM-3 -->
                <div class="item">

                  <!--PHOTO-ITEM-->
                  <div class="photo-item animation fadeIn">

                    <!--PHOTO-->
                    <img src="http://placehold.it/800x533" alt="" class="hover-animation image-zoom-in">

                    <!--PHOTO OVERLAY-->
                    <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                    </div><!--END of PHOTO OVERLAY-->

                    <!--ICON LINK-->
                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                      <div class="alignment">
                        <div class="v-align center-middle">

                          <a href="http://placehold.it/800x533" class="magnific-zoom" title="event-3">
                            <div class="de-icon circle light medium-size inline">
                              <i class="de-icon-zoom-in"></i>
                            </div>
                          </a>

                          <a href="#">
                            <div class="de-icon circle light medium-size inline">
                              <i class="de-icon-link"></i>
                            </div>
                          </a>

                        </div>
                      </div>
                    </div><!--END of ICON LINK-->

                  </div><!--END of PHOTO-ITEM-->

                  <!-- TITLE & EXCERPT -->
                  <div class="title-excerpt animation fadeIn">

                    <h3><a href="#">FOOD TRUCK DINNER</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna urna, imperdiet et purus ut, ultricies sollicitudin arcu. Cras placerat, arcu non faucibus suscipit, ex arcu consectetur enim.</p>

                  </div><!-- END of TITLE & EXCERPT -->

                </div><!--END of ITEM-3-->   

              </div><!--END of EVENTS CAROUSEL-->   

            </div>                        
          </div><!--END of ROW-2-->   
        </div>
      </section>

      <!-- PHOTO DIVIDER -->
      <section id="photo-divider-2">
        <div class="image-divider fixed-height" style="background-image:url(http://placehold.it/1920x1080); height:450px" data-stellar-background-ratio="0.3">
        </div>
      </section>

      <!-- GROOMSMEN SECTION -->
      <section id="groomsmen-section">

        <div class="container">

          <!-- ROW-1 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-md-offset-2 col-md-8 text-center">

              <div class="section-title animation fadeInUp">
                <h2>
                  GROOMSMEN
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                </p>


              </div>
            </div>
          </div> <!-- END of ROW-1 -->


          <!-- ROW-2 -->
          <div class="row">

            <!--GROOMSMEN-1-->
            <div class="col-md-4">

              <!--GROOMSMEN-ITEM-->
              <div class="groomsmen-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">BEST MAN</a></h3>
                  <p>James Nathan</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of GROOMSMEN-ITEM-->

            </div><!--END of GROOMSMEN-1-->



            <!--GROOMSMEN-2-->
            <div class="col-md-4">

              <!--GROOMSMEN-ITEM-->
              <div class="groomsmen-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">BEST FRIEND</a></h3>
                  <p>Jacob</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of GROOMSMEN-ITEM-->

            </div><!--END of GROOMSMEN-2-->



            <!--GROOMSMEN-3-->
            <div class="col-md-4">

              <!--GROOMSMEN-ITEM-->
              <div class="groomsmen-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">ROOM MATE</a></h3>
                  <p>Ehtan Henry</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of GROOMSMEN-ITEM-->

            </div><!--END of GROOMSMEN-1-->


            <!--GROOMSMEN-4-->
            <div class="col-md-4">

              <!--GROOMSMEN-ITEM-->
              <div class="groomsmen-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">COLLEGE FRIEND</a></h3>
                  <p>William Chloe</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of GROOMSMEN-ITEM-->

            </div><!--END of GROOMSMEN-4-->



            <!--GROOMSMEN-5-->
            <div class="col-md-4">

              <!--GROOMSMEN-ITEM-->
              <div class="groomsmen-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">BROTHER</a></h3>
                  <p>Samuel Luke</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of GROOMSMEN-ITEM-->

            </div><!--END of GROOMSMEN-5-->



            <!--GROOMSMEN-6-->
            <div class="col-md-4">

              <!--GROOMSMEN-ITEM-->
              <div class="groomsmen-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">FUTURE BROTHER IN LAW</a></h3>
                  <p>Hudson</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of GROOMSMEN-ITEM-->

            </div><!--END of GROOMSMEN-6-->

          </div>                     
          <!-- END of ROW-2 -->

        </div>

      </section>

      <!-- PHOTO DIVIDER -->
      <section id="photo-divider-3">
        <div class="image-divider fixed-height" style="background-image:url(http://placehold.it/1920x1080); height:450px" data-stellar-background-ratio="0.3">
        </div>
      </section>

      <!-- BRIDESMAID SECTION -->
      <section id="bridesmaid-section">

        <div class="container">

          <!-- ROW-1 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-md-offset-2 col-md-8 text-center">

              <div class="section-title animation fadeInUp">
                <h2>
                  BRIDESMAID
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                </p>


              </div>
            </div>
          </div> <!-- END of ROW-1 -->


          <!-- ROW-2 -->
          <div class="row">

            <!--BRIDESMAID-1-->
            <div class="col-md-4">

              <!--BRIDESMAID-ITEM-->
              <div class="bridesmaid-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">MAID OF HONOR</a></h3>
                  <p>Emma Grace</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of BRIDESMAID-ITEM-->

            </div><!--END of BRIDESMAID-1-->



            <!--BRIDESMAID-2-->
            <div class="col-md-4">

              <!--BRIDESMAID-ITEM-->
              <div class="bridesmaid-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">BEST FRIEND</a></h3>
                  <p>Audrey Amelia</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of BRIDESMAID-ITEM-->

            </div><!--END of BRIDESMAID-2-->



            <!--BRIDESMAID-3-->
            <div class="col-md-4">

              <!--BRIDESMAID-ITEM-->
              <div class="bridesmaid-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">ROOM MATE</a></h3>
                  <p>Abigail Chloe</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of BRIDESMAID-ITEM-->

            </div><!--END of BRIDESMAID-3-->



            <!--BRIDESMAID-4-->
            <div class="col-md-4">

              <!--BRIDESMAID-ITEM-->
              <div class="bridesmaid-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">COLLEGE FRIEND</a></h3>
                  <p>Clara Natalie</p> 

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of BRIDESMAID-ITEM-->

            </div><!--END of BRIDESMAID-4-->



            <!--BRIDESMAID-5-->
            <div class="col-md-4">

              <!--BRIDESMAID-ITEM-->
              <div class="bridesmaid-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">SISTER</a></h3>
                  <p>Alice Stella</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of BRIDESMAID-ITEM-->

            </div><!--END of BRIDESMAID-5-->



            <!--BRIDESMAID-6-->
            <div class="col-md-4">

              <!--BRIDESMAID-ITEM-->
              <div class="bridesmaid-item">

                <!--PHOTO-ITEM-->
                <div class="photo-item frame-border animation fadeIn">

                  <!--PHOTO-->
                  <img src="http://placehold.it/293x325" alt="" class="hover-animation image-zoom-rotate">

                  <!--PHOTO OVERLAY-->
                  <div class="layer wh100 hidden-black-overlay hover-animation fade-in">
                  </div><!--END of PHOTO OVERLAY-->

                  <!--ICON LINK-->
                  <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                    <div class="alignment">
                      <div class="v-align center-middle">

                        <a href="http://placehold.it/293x325" class="magnific-zoom">
                          <div class="de-icon circle light medium-size inline">
                            <i class="de-icon-zoom-in"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div><!--END of ICON LINK-->

                </div><!--END of PHOTO-ITEM-->   

                <!-- TITLE & EXCERPT -->
                <div class="title-excerpt animation fadeIn text-center">

                  <h3 class="no-margin"><a href="#">FUTURE SISTER IN LAW</a></h3>
                  <p>Lucy Evelyn</p>

                </div><!-- END of TITLE & EXCERPT -->

              </div><!--END of BRIDESMAID-ITEM-->

            </div><!--END of BRIDESMAID-6-->

          </div>                     
          <!-- END of ROW-2 -->

        </div>

      </section>

      <!-- GIFT REGISTRY SECTION -->
      <section id="gift-section">

        <div class="container">

          <!-- ROW-1 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-md-offset-2 col-md-8 text-center">

              <div class="section-title animation fadeInUp">
                <h2>
                  GIFT REGISTRY
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                </p>


              </div>
            </div>
          </div> <!-- END of ROW-1 -->

          <!-- ROW-1 -->
          <div class="row">
            <div class="col-md-offset-1 col-md-10 text-center">
              <div id="registry-logo" class="owl-carousel">
                <div class="item"> <a href="#"> <img src="http://placehold.it/249x67" alt=""> </a> </div>
                <div class="item"> <a href="#"> <img src="http://placehold.it/249x67" alt=""> </a> </div>
                <div class="item"> <a href="#"> <img src="http://placehold.it/249x67" alt=""> </a> </div>
                <div class="item"> <a href="#"> <img src="http://placehold.it/249x67g" alt=""> </a> </div>
                <div class="item"> <a href="#"> <img src="http://placehold.it/249x67" alt=""> </a> </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      <!-- RSVP SECTION -->
      <section id="rsvp-section">

        <div class="container">

          <!-- ROW-1 -->
          <div class="row">

            <!-- SECTION TITLE -->
            <div class="col-md-offset-2 col-md-8 text-center">

              <div class="section-title animation fadeInUp">
                <h2>
                  RSVP
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh.  Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar congue  ex, vitae 
                </p>


              </div>
            </div>
          </div> <!-- END of ROW-1 -->

          <!-- FORM -->
          <div class="row">
            <div id="message" class="col-md-12 message"> <!-- Show Message --> </div>

            <form method="post" action="rsvp.php" id="rsvpform">
              <div class="col-md-6">
                <div id="fullname" class="form-group">
                  <label for="inputname">*NAME</label>
                  <input type="text" class="form-control ajax-input" id="inputname" placeholder="" data-required="Name Required" data-output-label="Output Name">
                </div>
                <div id="email" class="form-group">
                  <label for="inputemail">*EMAIL</label>
                  <input type="email" class="form-control ajax-input" id="inputemail" placeholder="" data-required="Email Required" data-output-label="Output Email">
                </div>
                <div id="events" class="form-group">
                  <label for="inputevents">*I WILL ATTEND TO</label>
                  <select multiple id="inputevents" class="form-control ajax-input" data-required="Please Select Events" data-output-label="Output Events">
                    <option>Wedding Day</option>
                    <option>Ceremony Day</option>
                    <option>The Party</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputmessage">LEAVE YOUR MESSAGE</label>
                  <textarea id="inputmessage" class="form-control ajax-input" rows="14" data-output-label="Output Message"></textarea>
                </div> 
              </div>
              <div class="col-md-12 text-center">
                <div class="form-group">
                  <input type="submit" id="submitButton"  name="submitButton" class="button medium reverse" value="SUBMIT">
                </div> 
              </div>
            </form>

          </div>
        </div>

      </section>
    </section>

    <!-- FOOTER SECTION -->
    <footer>
      <div class="image-divider fixed-height" style="background-image:url(http://placehold.it/1920x1080);" data-stellar-background-ratio="0.5" >

        <div class="divider-overlay"></div>

        <!-- Use Center Middle Alignment to align middle the content for fixed-height parallax -->
        <div class="alignment"> 
          <div class="v-align center-middle">                   

            <div class="container">                    
              <div class="row">
                <div class="col-md-12">

                  <div class="animation fadeInUp">
                    <div id="thank-you">
                      <div id="thank">Thank</div>
                      <div id="you">You</div>
                    </div>
                  </div>

                  <div class="heart-divider animation delay1 fadeInUp">
                    <span class="white-line"></span>
                    <i class="de-icon-heart pink-heart"></i>
                    <i class="de-icon-heart white-heart"></i>
                    <span class="white-line"></span>
                  </div>

                  <div id="footer-couple-name" class="animation delay1 fadeInUp">
                    GERRARD & DIANNE
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  </div>

</body>



{% endblock %}