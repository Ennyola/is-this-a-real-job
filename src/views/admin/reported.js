<% include ../partials/header %>
<% include ../partials/nav %>
  <script type="text/javascript">
    const user = JSON.parse(localStorage.getItem('user'))
    const notification = document.querySelector('.notification');
    if(!user || !user.isAdmin){
      notification.innerHTML = `<strong>Contact the site administrator to complete this operation</strong>`;
      notification.className += ' show';
      if (/*@cc_on!@*/false || !!document.documentMode) {
        document.execCommand("Stop");
      }else{
        window.stop()
      };
      setTimeout(() => {
        notification.className = 'notification';
      }, 2500);

      setTimeout(()=>{
        window.location.href = '/posts'
      },3000)
    }
  </script>

    <style>
      
      h3 {
        color: #636B6F;
      }
      
      .dashboard {
        display: inline-block;
      }
      
      .dashboard-tab li {
        list-style: none;
      }
      
      .dashboard-tab-items a {
        text-decoration: none;
      }
      
      .dtab-margin {
        margin-bottom: 20px;
      }
      
      .users-list-color {
        background-color: #E3E9EF;
        padding: 20px;
        margin-bottom: 20px;
      }
      
      .users-list-plain {
        background-color: #fff;
        padding: 20px;
        margin-bottom: 20px;
      }
      
      .user-avatar {
        width: 110px;
        height: 105px;
        border-radius: 50px;
      }
      
      .block a {
        text-decoration: none;
      }
      
      .block-btn {
        margin: 30px auto;
        display: block;
        text-align: center;
        width: 50%;
        padding: 10px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.089);
        border: 1px solid #3087d1;
        color: #3087d1;
      }
      
      .block-btn:hover {
        background-color: #3087d1;
        color: #fff;
        transition: .5s ease-out;
      }
      
      .block-btn-blue {
        border: 1px solid red;
        color: red;
      }
      
      .block-btn-blue:hover {
        background-color: red;
        color: #fff;
        transition: .5s ease-out;
      }
      
      @media screen and (max-width: 991px) {
        .block-btn {
          margin: 0;
          width: 40%;
          margin: 0 auto;
        }
        .users-list {
          text-align: center;
        }
        .dashboard-tab {
          display: flex;
          justify-content: space-between;
        }
      }
      
      @media screen and (max-width: 799px) {
        .users-list {
          width: 500px;
        }
        .user-container {
          margin-left: 100px;
        }
      }
      
      @media screen and (max-width: 600px) {
        .users-list {
          width: 400px;
        }
      }
      
      @media screen and (max-width: 500px) {
        .users-list {
          width: 300px;
        }
        .user-container {
          margin-left: 40px;
        }
        .navbar-brand {
          font-size: 24px;
        }
        h3 {
          font-size: 27px;
        }
      }
      
      @media screen and (max-width: 400px) {
        .users-list {
          width: 250px;
        }
        .user-container {
          margin-left: 35px;
        }
      }
    </style>
    <div id="cover">
      <div class="loader"></div>
    </div>
    <!-- <div class="notification">
      Simple Notification
    </div> -->
    <section>
      <div class="container user-container">
        <div class="row">
          <div class="col-lg-4">
            <section class="users">
              <div class="dashboard">
                <h3 class="dtab-margin">Dashboard</h3>
                <!-- DASHBOARD TABS -->
                <ul class="dashboard-tab">
                  <li class="dashboard-tab-items dtab-margin">
                    <a href="/admin/users">Users</a>
                  </li>
                  <li class="dashboard-tab-items dtab-margin">
                    <a href="/admin/posts">Posts</a>
                  </li>
                  <li class="dashboard-tab-items dtab-margin">
                    <a href="/admin/reportedusers">Reported</a>
                  </li>
                </ul>
              </div>
          </div>

          <!-- USERS LIST -->
          <div class="col-lg-8 users-section">
            <% if (users.length === 0) { %>
              <span id="no-users" class="bg-transparent container">The world is your oyseter. Fill it.</span>
              <% } %>

                <% if (users.length > 0) { %>
                  <% for (user of users) { %>
                    <!-- NEW USER -->
                    <div class="row users-list users-list-color">
                      <div class="col-lg-6">
                        <div class="row">
                          <!-- USER AVATAR HERE -->
                          <input type="hidden" class=".inviteId" value="<%=user.userId%>" />
                          <div class="col-lg-6 user-avatar-container">
                            <img class="user-avatar" src="https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70" alt="">
                          </div>
                          <!-- USER NAME & HANDLE HERE -->
                          <div class="col-lg-6">
                            <h5 class="user-name">
                              <%=user.name%>
                            </h5>
                            <p class="user-handle">
                              <%=user.username%>
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- BLOCK BUTTON -->
                      <div class=" block col-lg-6">
                        <a class="block-btn <%=user.isBlocked ? '' : ' block-btn-blue'%>" href="">
                          <%=user.isBlocked ? 'Unblock' : 'Block'%>
                        </a>
                      </div>
                    </div>

                    <% } %>
                      <% } %>
          </div>
        </div>
      </div>
      </section>

      <% include ../partials/footer %>
