
<!DOCTYPE html>
<html>
  <head>
    <?php
      include 'php_includes/config.php';
      include 'php_includes/head.php';
    ?>
  </head>
  <body>
    <header id='home' class='clear'>
      <div class='mobile-btn'><i class='fa fa-bars'></i></div>
      <div class='main_logo'><a href='index.html'>AK</a></div>
      <nav class='main_nav'>
        <a href='#home'>home</a>
        <a href='#about'>about</a>
        <a href='#work'>work</a>
        <a href='#contact'>contact me</a>
      </nav>

      <div class='desk_bg'>
        <img src='img/desk_img.png' class='main_img'>
      </div>
    </header>

    <section id='about' class='clear'>
      <div class='about_title'>About me</div>
      <div class='about_desc'>
        Hey there! I'm Andrew. Originally from Kansas City, Missouri, I am a self taught web developer turned designer and and leaning towards moving into the full stack world, because why not. I'm also a student at Northwest Missouri State University up in Maryville, Missouri, where I am studying to become a web designer. As a testament to how much I enjoy designing, I designed and developed this site in under 12 hours.
      </div>
    </section>

    <section id='toolbelt' class='clear'>
      <div class='toolbelt_title'>Inside my Bag</div>
      <img src='img/bag.png'></div>
      <div class='bag'>
        <div class='cap'>
          <img src='img/cap.png'>
          <div class='bag_title'>Thinking Cap</div>
          <div class='bag_desc'>
            You’ve gotta keep the brain churning at all the hours of the day. This mystical cap provides this unseen power.
          </div>
        </div>
        <div class='pencils'>
          <img src='img/pencils.png'>
          <div class='bag_title'>Colored Pencils</div>
          <div class='bag_desc'>
            How can you make things look amazing without a  fantastic set of pencils?
          </div>
        </div>
        <div class='paper'>
          <img src='img/paper.png'>
          <div class='bag_title'>Scratch Paper</div>
          <div class='bag_desc'>
            Ideas dont happen at once. They occur at all  times of the day and night. Not all programs are written on a computer.
          </div>
        </div>
      </div>
    </section>

    <section id='work' class='clear'>
      <div class='work_title'>Unique Projects</div>
      <div class='projects_container'>
        <div class='project'><a href='http://www.akrausedesign.com/brickclick'>
          <div class='project_title_container'>
            <div class='project_title'>Brick &amp; Click</div>
          </div>
        </a></div>
        <div class='project'><a href='http://www.akrausedesign.com/nwmissourian'>
          <div class='project_title_container'>
            <div class='project_title'>Northwest Missourian</div>
          </div>
        </a></div>
      </div>
      <div class='work_more'>More</div>
    </section>

    <section id='contact' class='clear'>
      <div class='contact_title'>Borrow my Thinking Cap?</div>
      <form action="http://formspree.io/andrew.l.krause@gmail.com" method="POST">
        <input type='text' id='firstlast' name='firstlast' placeholder='First &amp; Last name' autocomplete='off'>
        <input type='text' id='email' name='email' placeholder='Your Email'  autocomplete='off'><br>
        <textarea type='text' id='message' name='message' placeholder='Why you need my thinking cap...' autocomplete='off'></textarea><br>
        <button type='submit' onclick='formReset()'>I can handle the cap</button>
        <button type='resest' onclick='formReset()'>I can't handle the cap</button>
      </form>
    </section>

    <!-- change the form to PHP handling instead of ofsite service so that the js will work correctly -->


    <footer class='clear'>
      <div class='social-links'>
        <a href='http://www.twitter.com/akrausedesign'><i class='fa fa-twitter'></i></a>
        <a href='http://www.linkedin.com/in/andrewlkrause'><i class='fa fa-linkedin'></i></a>
        <a href='http://www.github.com/MRkrau6253'><i class='fa fa-github'></i></a>
        <a href='http://www.akrausedesign.com/changelog'><i class='fa fa-check-square-o'></i></a>
      </div>
      <div class='copyright'>&copy; 2016 Andrew Krause Design</div>
    </footer>

    <!-- javascript codes -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script>
      $(document).ready(function(){
        $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });
        $('.mobile-btn').click(function(e){
          $('.main_nav').slideToggle();

          $('.main_nav a').click(function(){
            $('.main_nav').slideUp();
          });

          e.preventDefault();
        });
      });

      function formReset(){
        $('#contact button[type=submit]').click(function(){
          $('#contact form input').html = "";
          $('#contact form textarea').html = "";
        });
      }


      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-75423608-1', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
