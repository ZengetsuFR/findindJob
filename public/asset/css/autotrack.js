



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled emoji-size-boost is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-8c26e767b0a264423ad015da4d24e232d3bff5e88070d44aca8bd3d8f4a226a5.css" integrity="sha256-jCbnZ7CiZEI60BXaTSTiMtO/9eiAcNRKyovT2PSiJqU=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-d8ed145bdf068fa6112b605071db55ccd9a7045533a2919d609fd28fbdf7d956.css" integrity="sha256-2O0UW98Gj6YRK2BQcdtVzNmnBFUzopGdYJ/Sj7332VY=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-404cdd1add1f710db016a02e5e31fff8a9089d14ff0c227df862b780886db7d5.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-00274be02ca83717fd26c1217d72ead4b257c847581b6c7497ad0a88ccd20723.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>autotrack/autotrack.js at master · googleanalytics/autotrack</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/4327788?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="googleanalytics/autotrack" name="twitter:title" /><meta content="autotrack - Automatic and enhanced Google Analytics tracking for common user interactions on the web." name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/4327788?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="googleanalytics/autotrack" property="og:title" /><meta content="https://github.com/googleanalytics/autotrack" property="og:url" /><meta content="autotrack - Automatic and enhanced Google Analytics tracking for common user interactions on the web." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/OTQzODc1NzplNDhmODMyZTgzYTJlNjM2ZWJhYmJjNzljNzA0ZjdiZDowOTMyY2FlNDMzMjNkMjUyNGEzMzQwOWY1OTk3NGRlY2RhMjYwYTE3MDc3MmI3YzgwMjhkMzRlY2M5ZTQ4Yzhl--7591900aea1d06abd8971aecdd6d9591f25fdefb">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="500C53A0:1023:50F0B72:579F06FE" name="octolytics-dimension-request_id" /><meta content="9438757" name="octolytics-actor-id" /><meta content="ZengetsuFR" name="octolytics-actor-login" /><meta content="8d26b91a4feb520f940ac6084bb4944521d5977e29a6a9107af31e732fed218e" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="ZengetsuFR">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="YzBiOGNlZmNkN2NjNjViMmVmYzU0YWUyNDU0M2M3NDExNTY3MGFkNWRhZjg4ZjllODY4MjkwMGRjODVkYTBmYnx7InJlbW90ZV9hZGRyZXNzIjoiODAuMTIuODMuMTYwIiwicmVxdWVzdF9pZCI6IjUwMEM1M0EwOjEwMjM6NTBGMEI3Mjo1NzlGMDZGRSIsInRpbWVzdGFtcCI6MTQ3MDAzOTgwNn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="4854a325109a832bbc975afbfc4454b998c4c5b6">
    <meta content="01b683f2c97b1fa270b96e5980d9bee3cbbb706f" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="63246eca2ca3a9895dadcd535d084322">
    

      
  <meta name="description" content="autotrack - Automatic and enhanced Google Analytics tracking for common user interactions on the web.">
  <meta name="go-import" content="github.com/googleanalytics/autotrack git https://github.com/googleanalytics/autotrack.git">

  <meta content="4327788" name="octolytics-dimension-user_id" /><meta content="googleanalytics" name="octolytics-dimension-user_login" /><meta content="45273502" name="octolytics-dimension-repository_id" /><meta content="googleanalytics/autotrack" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="45273502" name="octolytics-dimension-repository_network_root_id" /><meta content="googleanalytics/autotrack" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/googleanalytics/autotrack/commits/master.atom" rel="alternate" title="Recent Commits to autotrack:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/googleanalytics/autotrack/blob/master/autotrack.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production macintosh vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/googleanalytics/autotrack/search" class="js-site-search-form" data-scoped-search-url="/googleanalytics/autotrack/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:9438757" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="googleanalytics/autotrack">This repository</span>
  </div>
    <a class="dropdown-item" href="/googleanalytics/autotrack/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/ZengetsuFR"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@ZengetsuFR" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/9438757?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">ZengetsuFR</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/ZengetsuFR" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="01b683f2c97b1fa270b96e5980d9bee3cbbb706f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lHgot6uE0GiqgA++8NXX4clbR1bDul2JkU6xMLiMWMohXR7amUmGYDNNtT8TQuTCE1u34tlgNt5qUmVtgo/gFQ==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="01b683f2c97b1fa270b96e5980d9bee3cbbb706f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zZs+dEGvfJSoWrvsfuBYYUhp8h6L+sgUuXeSKd1P0yP70smWh14/E4YlFmeIgdQ/oXWZ4hq7ehgelRZUwxFlcg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="45273502" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/googleanalytics/autotrack/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/googleanalytics/autotrack/watchers">
            76
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/googleanalytics/autotrack/unstar" class="starred" data-form-nonce="01b683f2c97b1fa270b96e5980d9bee3cbbb706f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="o8et2ydKRHeJO0ZZ1u7qiGV9OI6rfcGFaTtNiGD4RFfgqtFJdli8TgDrTp8mUwwPWO5ko/tHsafWAU4TvXic6w==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar googleanalytics/autotrack"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/googleanalytics/autotrack/stargazers">
          1,130
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/googleanalytics/autotrack/star" class="unstarred" data-form-nonce="01b683f2c97b1fa270b96e5980d9bee3cbbb706f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="n+zq9d/YYp2EHrkDyWSdM8V37L7+x5I+Mk/9H5XJAzKwW1EMawVA2dATPU3mOvvhSecm9WYk7qwNHWrzI0ry7w==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star googleanalytics/autotrack"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/googleanalytics/autotrack/stargazers">
          1,130
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of googleanalytics/autotrack to your account"
              aria-label="Fork your own copy of googleanalytics/autotrack to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/googleanalytics/autotrack/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/googleanalytics/autotrack/network" class="social-count">
      78
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/googleanalytics" class="url fn" rel="author">googleanalytics</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/googleanalytics/autotrack" data-pjax="#js-repo-pjax-container">autotrack</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/googleanalytics/autotrack" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /googleanalytics/autotrack" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/googleanalytics/autotrack/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /googleanalytics/autotrack/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">2</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/googleanalytics/autotrack/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /googleanalytics/autotrack/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>



  <a href="/googleanalytics/autotrack/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /googleanalytics/autotrack/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/googleanalytics/autotrack/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /googleanalytics/autotrack/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/googleanalytics/autotrack/blob/e8d848441781030965e9a2467ca67eb21895dad6/autotrack.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c2a21771565572f1b70471d4bddfcc61 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/googleanalytics/autotrack/blob/1.0-dev/autotrack.js"
               data-name="1.0-dev"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="1.0-dev">
                1.0-dev
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/googleanalytics/autotrack/blob/master/autotrack.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/1.0.0/autotrack.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/0.6.5/autotrack.js"
              data-name="0.6.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.5">
                0.6.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/0.6.4/autotrack.js"
              data-name="0.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.4">
                0.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/0.6.3/autotrack.js"
              data-name="0.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.3">
                0.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/0.6.2/autotrack.js"
              data-name="0.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.2">
                0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/0.6.1/autotrack.js"
              data-name="0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.1">
                0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/0.6.0/autotrack.js"
              data-name="0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.0">
                0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/0.5.0/autotrack.js"
              data-name="0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.0">
                0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/googleanalytics/autotrack/tree/0.4.0/autotrack.js"
              data-name="0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.0">
                0.4.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/googleanalytics/autotrack/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/googleanalytics/autotrack"><span>autotrack</span></a></span></span><span class="separator">/</span><strong class="final-path">autotrack.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/googleanalytics/autotrack/commit/c50590c3a150744fd8319ad400ff88e3cc33b524" data-pjax>
          c50590c
        </a>
        <relative-time datetime="2016-07-18T21:37:47Z">Jul 18, 2016</relative-time>
      </span>
      <div>
        <img alt="@philipwalton" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/326742?v=3&amp;s=40" width="20" />
        <a href="/philipwalton" class="user-mention" rel="contributor">philipwalton</a>
          <a href="/googleanalytics/autotrack/commit/c50590c3a150744fd8319ad400ff88e3cc33b524" class="message" data-pjax="true" title="Address review feedback">Address review feedback</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@philipwalton" height="24" src="https://avatars3.githubusercontent.com/u/326742?v=3&amp;s=48" width="24" />
            <a href="/philipwalton">philipwalton</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/googleanalytics/autotrack/raw/master/autotrack.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/googleanalytics/autotrack/blame/master/autotrack.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/googleanalytics/autotrack/commits/master/autotrack.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://mac.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/googleanalytics/autotrack/edit/master/autotrack.js" class="inline-form js-update-url-with-hash" data-form-nonce="01b683f2c97b1fa270b96e5980d9bee3cbbb706f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="irQnoAwaFNBf7eAEjBSd1rLFxYG4DO+3QBj10PGHpgm4TA0LN8GXWCce7PGoW7RJcXfara0msE5HPq9gJ3Rqwg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/googleanalytics/autotrack/delete/master/autotrack.js" class="inline-form" data-form-nonce="01b683f2c97b1fa270b96e5980d9bee3cbbb706f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BrTWg1FKmpORoaZURHwAonQTA0RW7+ZqwxzKy47KkVYZDAyKphtTDYSuRh/0cPW5oM78S1xHFVrwBIBlWLJnLg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      21 lines (19 sloc)
      <span class="file-info-divider"></span>
    25.6 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@license</span></span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright 2016 Google Inc. All Rights Reserved.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! autotrack.js v1.0.0 */</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">!function t(e,i,n){function s(o,a){if(!i[o]){if(!e[o]){var l=&quot;function&quot;==typeof require&amp;&amp;require;if(!a&amp;&amp;l)return l(o,!0);if(r)return r(o,!0);var c=new Error(&quot;Cannot find module &#39;&quot;+o+&quot;&#39;&quot;);throw c.code=&quot;MODULE_NOT_FOUND&quot;,c}var h=i[o]={exports:{}};e[o][0].call(h.exports,function(t){var i=e[o][1][t];return s(i?i:t)},h,h.exports,t,e,i,n)}return i[o].exports}for(var r=&quot;function&quot;==typeof require&amp;&amp;require,o=0;o&lt;n.length;o++)s(n[o]);return s}({1:[function(t,e,i){e.exports={VERSION:&quot;1.0.0&quot;,DEV_ID:&quot;i5iSjo&quot;,VERSION_PARAM:&quot;&amp;_av&quot;,USAGE_PARAM:&quot;&amp;_au&quot;,NULL_DIMENSION:&quot;(not set)&quot;}},{}],2:[function(t,e,i){function n(){console.error(&quot;Requiring the `autotrack` plugin no longer requires all sub-plugins be default. See https://goo.gl/sZ2WrW for details.&quot;)}var s=t(&quot;../provide&quot;);s(&quot;autotrack&quot;,n)},{&quot;../provide&quot;:12}],3:[function(t,e,i){function n(t,e){l.track(t,l.plugins.CLEAN_URL_TRACKER),this.opts=s({stripQuery:!1,queryDimensionIndex:null,indexFilename:null,trailingSlash:null},e),this.tracker=t,this.overrideTrackerBuildHitTask()}var s=t(&quot;object-assign&quot;),r=t(&quot;dom-utils/lib/parse-url&quot;),o=t(&quot;../constants&quot;),a=t(&quot;../provide&quot;),l=t(&quot;../usage&quot;);n.prototype.cleanUrlTask=function(t){var e=t.get(&quot;location&quot;),i=t.get(&quot;page&quot;),n=r(i||e),s=n.pathname,a=s;if(this.opts.indexFilename){var l=a.split(&quot;/&quot;);this.opts.indexFilename==l[l.length-1]&amp;&amp;(l[l.length-1]=&quot;&quot;,a=l.join(&quot;/&quot;))}if(&quot;remove&quot;==this.opts.trailingSlash)a=a.replace(/\/+$/,&quot;&quot;);else if(&quot;add&quot;==this.opts.trailingSlash){var c=/\.\w+$/.test(a);c||&quot;/&quot;==a.substr(-1)||(a+=&quot;/&quot;)}this.opts.stripQuery&amp;&amp;this.opts.queryDimensionIndex&amp;&amp;t.set(&quot;dimension&quot;+this.opts.queryDimensionIndex,n.query||o.NULL_DIMENSION),t.set(&quot;page&quot;,a+(this.opts.stripQuery?&quot;&quot;:n.search))},n.prototype.overrideTrackerBuildHitTask=function(){this.originalTrackerBuildHitTask=this.tracker.get(&quot;buildHitTask&quot;),this.tracker.set(&quot;buildHitTask&quot;,function(t){this.cleanUrlTask(t),this.originalTrackerBuildHitTask(t)}.bind(this))},n.prototype.remove=function(){this.tracker.set(&quot;sendHitTask&quot;,this.originalTrackerSendHitTask)},a(&quot;cleanUrlTracker&quot;,n)},{&quot;../constants&quot;:1,&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;dom-utils/lib/parse-url&quot;:22,&quot;object-assign&quot;:23}],4:[function(t,e,i){function n(t,e){if(a.track(t,a.plugins.EVENT_TRACKER),window.addEventListener){this.opts=s({events:[&quot;click&quot;],fieldsObj:{},attributePrefix:&quot;ga-&quot;,hitFilter:null},e),this.tracker=t,this.handleEvents=this.handleEvents.bind(this);var i=&quot;[&quot;+this.opts.attributePrefix+&quot;on]&quot;;this.delegates={},this.opts.events.forEach(function(t){this.delegates[t]=r(document,t,i,this.handleEvents,{deep:!0,useCapture:!0})}.bind(this))}}var s=t(&quot;object-assign&quot;),r=t(&quot;dom-utils/lib/delegate&quot;),o=t(&quot;../provide&quot;),a=t(&quot;../usage&quot;),l=t(&quot;../utilities&quot;).createFieldsObj,c=t(&quot;../utilities&quot;).getAttributeFields;n.prototype.handleEvents=function(t,e){var i=this.opts.attributePrefix;if(t.type==e.getAttribute(i+&quot;on&quot;)){var n={transport:&quot;beacon&quot;},r=c(e,i),o=s({},this.opts.fieldsObj,r),a=r.hitType||&quot;event&quot;;this.tracker.send(a,l(n,o,this.tracker,this.opts.hitFilter,e))}},n.prototype.remove=function(){Object.keys(this.delegates).forEach(function(t){this.delegates[t].destroy()}.bind(this))},o(&quot;eventTracker&quot;,n)},{&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;../utilities&quot;:14,&quot;dom-utils/lib/delegate&quot;:18,&quot;object-assign&quot;:23}],5:[function(t,e,i){function n(t,e){if(a.track(t,a.plugins.IMPRESSION_TRACKER),window.IntersectionObserver&amp;&amp;window.MutationObserver){this.opts=r({elements:[],rootMargin:&quot;0px&quot;,fieldsObj:{},attributePrefix:&quot;ga-&quot;,hitFilter:null},e),this.tracker=t,this.handleDomMutations=this.handleDomMutations.bind(this),this.walkNodeTree=this.walkNodeTree.bind(this),this.handleIntersectionChanges=this.handleIntersectionChanges.bind(this),this.startObserving=this.startObserving.bind(this),this.observeElement=this.observeElement.bind(this),this.handleDomElementRemoved=this.handleDomElementRemoved.bind(this);var i=this.deriveDataFromConfigOptions();this.items=i.items,this.elementMap=i.elementMap,this.threshold=i.threshold,this.intersectionObserver=this.initIntersectionObserver(),this.mutationObserver=this.initMutationObserver(),c(this.startObserving)}}function s(t,e){if(0===t){var i=e.intersectionRect;return i.top&gt;0||i.bottom&gt;0||i.left&gt;0||i.right&gt;0}return e.intersectionRatio&gt;=t}var r=t(&quot;object-assign&quot;),o=t(&quot;../provide&quot;),a=t(&quot;../usage&quot;),l=t(&quot;../utilities&quot;).createFieldsObj,c=t(&quot;../utilities&quot;).domReady,h=t(&quot;../utilities&quot;).getAttributeFields;n.prototype.deriveDataFromConfigOptions=function(){var t=[],e=[],i={};return this.opts.elements.forEach(function(n){&quot;string&quot;==typeof n&amp;&amp;(n={id:n}),t.push(n=r({threshold:0,trackFirstImpressionOnly:!0},n)),i[n.id]=null,e.push(n.threshold)}),{items:t,elementMap:i,threshold:e}},n.prototype.initMutationObserver=function(){return new MutationObserver(this.handleDomMutations)},n.prototype.initIntersectionObserver=function(){return new IntersectionObserver(this.handleIntersectionChanges,{rootMargin:this.opts.rootMargin,threshold:this.threshold})},n.prototype.startObserving=function(){Object.keys(this.elementMap).forEach(this.observeElement),this.mutationObserver.observe(document.body,{childList:!0,subtree:!0}),requestAnimationFrame(function(){})},n.prototype.observeElement=function(t){var e=this.elementMap[t]||(this.elementMap[t]=document.getElementById(t));e&amp;&amp;this.intersectionObserver.observe(e)},n.prototype.handleDomMutations=function(t){for(var e,i=0;e=t[i];i++){for(var n,s=0;n=e.removedNodes[s];s++)this.walkNodeTree(n,this.handleDomElementRemoved);for(var r,o=0;r=e.addedNodes[o];o++)this.walkNodeTree(r,this.observeElement)}},n.prototype.walkNodeTree=function(t,e){1==t.nodeType&amp;&amp;t.id in this.elementMap&amp;&amp;e(t.id);for(var i,n=0;i=t.childNodes[n];n++)this.walkNodeTree(i,e)},n.prototype.handleIntersectionChanges=function(t){for(var e,i=0;e=t[i];i++)for(var n,r=0;n=this.items[r];r++)e.target.id===n.id&amp;&amp;s(n.threshold,e)&amp;&amp;(this.handleImpression(n.id),n.trackFirstImpressionOnly&amp;&amp;(this.items.splice(r,1),r--,this.possiblyUnobserveElement(n.id)));0===this.items.length&amp;&amp;this.remove()},n.prototype.handleImpression=function(t){var e=document.getElementById(t),i={transport:&quot;beacon&quot;,eventCategory:&quot;Viewport&quot;,eventAction:&quot;impression&quot;,eventLabel:t},n=r({},this.opts.fieldsObj,h(e,this.opts.attributePrefix));this.tracker.send(&quot;event&quot;,l(i,n,this.tracker,this.opts.hitFilter,e))},n.prototype.possiblyUnobserveElement=function(t){this.itemsIncludesId(t)||(this.intersectionObserver.unobserve(this.elementMap[t]),delete this.elementMap[t])},n.prototype.handleDomElementRemoved=function(t){this.intersectionObserver.unobserve(this.elementMap[t]),this.elementMap[t]=null},n.prototype.itemsIncludesId=function(t){return this.items.some(function(e){return t==e.id})},n.prototype.remove=function(){this.mutationObserver.disconnect(),this.intersectionObserver.disconnect()},o(&quot;impressionTracker&quot;,n)},{&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;../utilities&quot;:14,&quot;object-assign&quot;:23}],6:[function(t,e,i){function n(t,e){c.track(t,c.plugins.MEDIA_QUERY_TRACKER),window.matchMedia&amp;&amp;(this.opts=r({definitions:null,changeTemplate:this.changeTemplate,changeTimeout:1e3,fieldsObj:{},hitFilter:null},e),u(this.opts.definitions)&amp;&amp;(this.opts.definitions=d(this.opts.definitions),this.tracker=t,this.changeListeners=[],this.processMediaQueries()))}function s(t){return p[t]?p[t]:(p[t]=window.matchMedia(t),p[t])}var r=t(&quot;object-assign&quot;),o=t(&quot;debounce&quot;),a=t(&quot;../constants&quot;),l=t(&quot;../provide&quot;),c=t(&quot;../usage&quot;),h=t(&quot;../utilities&quot;).createFieldsObj,u=t(&quot;../utilities&quot;).isObject,d=t(&quot;../utilities&quot;).toArray,p={};n.prototype.processMediaQueries=function(){this.opts.definitions.forEach(function(t){if(t.name&amp;&amp;t.dimensionIndex){var e=this.getMatchName(t);this.tracker.set(&quot;dimension&quot;+t.dimensionIndex,e),this.addChangeListeners(t)}}.bind(this))},n.prototype.getMatchName=function(t){var e;return t.items.forEach(function(t){s(t.media).matches&amp;&amp;(e=t)}),e?e.name:a.NULL_DIMENSION},n.prototype.addChangeListeners=function(t){t.items.forEach(function(e){var i=s(e.media),n=o(function(){this.handleChanges(t)}.bind(this),this.opts.changeTimeout);i.addListener(n),this.changeListeners.push({mql:i,fn:n})}.bind(this))},n.prototype.handleChanges=function(t){var e=this.getMatchName(t),i=this.tracker.get(&quot;dimension&quot;+t.dimensionIndex);if(e!==i){this.tracker.set(&quot;dimension&quot;+t.dimensionIndex,e);var n={eventCategory:t.name,eventAction:&quot;change&quot;,eventLabel:this.opts.changeTemplate(i,e)};this.tracker.send(&quot;event&quot;,h(n,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}},n.prototype.remove=function(){for(var t,e=0;t=this.changeListeners[e];e++)t.mql.removeListener(t.fn)},n.prototype.changeTemplate=function(t,e){return t+&quot; =&gt; &quot;+e},l(&quot;mediaQueryTracker&quot;,n)},{&quot;../constants&quot;:1,&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;../utilities&quot;:14,debounce:16,&quot;object-assign&quot;:23}],7:[function(t,e,i){function n(t,e){l.track(t,l.plugins.OUTBOUND_FORM_TRACKER),window.addEventListener&amp;&amp;(this.opts=s({formSelector:&quot;form&quot;,shouldTrackOutboundForm:this.shouldTrackOutboundForm,fieldsObj:{},attributePrefix:&quot;ga-&quot;,hitFilter:null},e),this.tracker=t,this.delegate=r(document,&quot;submit&quot;,&quot;form&quot;,this.handleFormSubmits.bind(this),{deep:!0,useCapture:!0}))}var s=t(&quot;object-assign&quot;),r=t(&quot;dom-utils/lib/delegate&quot;),o=t(&quot;dom-utils/lib/parse-url&quot;),a=t(&quot;../provide&quot;),l=t(&quot;../usage&quot;),c=t(&quot;../utilities&quot;).createFieldsObj,h=t(&quot;../utilities&quot;).getAttributeFields,u=t(&quot;../utilities&quot;).withTimeout;n.prototype.handleFormSubmits=function(t,e){var i=o(e.action).href,n={transport:&quot;beacon&quot;,eventCategory:&quot;Outbound Form&quot;,eventAction:&quot;submit&quot;,eventLabel:i};if(this.opts.shouldTrackOutboundForm(e,o)){navigator.sendBeacon||(t.preventDefault(),n.hitCallback=u(function(){e.submit()}));var r=s({},this.opts.fieldsObj,h(e,this.opts.attributePrefix));this.tracker.send(&quot;event&quot;,c(n,r,this.tracker,this.opts.hitFilter,e))}},n.prototype.shouldTrackOutboundForm=function(t,e){var i=e(t.action);return i.hostname!=location.hostname&amp;&amp;&quot;http&quot;==i.protocol.slice(0,4)},n.prototype.remove=function(){this.delegate.destroy()},a(&quot;outboundFormTracker&quot;,n)},{&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;../utilities&quot;:14,&quot;dom-utils/lib/delegate&quot;:18,&quot;dom-utils/lib/parse-url&quot;:22,&quot;object-assign&quot;:23}],8:[function(t,e,i){function n(t,e){l.track(t,l.plugins.OUTBOUND_LINK_TRACKER),window.addEventListener&amp;&amp;(this.opts=s({events:[&quot;click&quot;],linkSelector:&quot;a&quot;,shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:&quot;ga-&quot;,hitFilter:null},e),this.tracker=t,this.handleLinkInteractions=this.handleLinkInteractions.bind(this),this.delegates={},this.opts.events.forEach(function(t){this.delegates[t]=r(document,t,this.opts.linkSelector,this.handleLinkInteractions,{deep:!0,useCapture:!0})}.bind(this)))}var s=t(&quot;object-assign&quot;),r=t(&quot;dom-utils/lib/delegate&quot;),o=t(&quot;dom-utils/lib/parse-url&quot;),a=t(&quot;../provide&quot;),l=t(&quot;../usage&quot;),c=t(&quot;../utilities&quot;).createFieldsObj,h=t(&quot;../utilities&quot;).getAttributeFields;n.prototype.handleLinkInteractions=function(t,e){if(this.opts.shouldTrackOutboundLink(e,o)){navigator.sendBeacon||(e.target=&quot;_blank&quot;);var i={transport:&quot;beacon&quot;,eventCategory:&quot;Outbound Link&quot;,eventAction:t.type,eventLabel:e.href},n=s({},this.opts.fieldsObj,h(e,this.opts.attributePrefix));this.tracker.send(&quot;event&quot;,c(i,n,this.tracker,this.opts.hitFilter,e))}},n.prototype.shouldTrackOutboundLink=function(t,e){var i=e(t.href);return i.hostname!=location.hostname&amp;&amp;&quot;http&quot;==i.protocol.slice(0,4)},n.prototype.remove=function(){Object.keys(this.delegates).forEach(function(t){this.delegates[t].destroy()}.bind(this))},a(&quot;outboundLinkTracker&quot;,n)},{&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;../utilities&quot;:14,&quot;dom-utils/lib/delegate&quot;:18,&quot;dom-utils/lib/parse-url&quot;:22,&quot;object-assign&quot;:23}],9:[function(t,e,i){function n(t,e){o.track(t,o.plugins.PAGE_VISIBILITY_TRACKER),window.addEventListener&amp;&amp;(this.opts=s({sessionTimeout:c,changeTemplate:this.changeTemplate,hiddenMetricIndex:null,visibleMetricIndex:null,fieldsObj:{},hitFilter:null},e),this.tracker=t,this.visibilityState=document.visibilityState,this.lastVisibilityChangeTime=+new Date,this.handleVisibilityStateChange=this.handleVisibilityStateChange.bind(this),this.overrideTrackerSendMethod(),this.overrideTrackerSendHitTask(),document.addEventListener(&quot;visibilitychange&quot;,this.handleVisibilityStateChange))}var s=t(&quot;object-assign&quot;),r=t(&quot;../provide&quot;),o=t(&quot;../usage&quot;),a=t(&quot;../utilities&quot;).createFieldsObj,l=t(&quot;../utilities&quot;).isObject,c=30;n.prototype.handleVisibilityStateChange=function(){var t;if(this.prevVisibilityState=this.visibilityState,this.visibilityState=document.visibilityState,this.sessionHasTimedOut()){if(&quot;hidden&quot;==this.visibilityState)return;&quot;visible&quot;==this.visibilityState&amp;&amp;(t={transport:&quot;beacon&quot;},this.tracker.send(&quot;pageview&quot;,a(t,this.opts.fieldsObj,this.tracker,this.opts.hitFilter)))}else{var e=Math.round((new Date-this.lastVisibilityChangeTime)/1e3)||1;t={transport:&quot;beacon&quot;,eventCategory:&quot;Page Visibility&quot;,eventAction:&quot;change&quot;,eventLabel:this.opts.changeTemplate(this.prevVisibilityState,this.visibilityState),eventValue:e},&quot;hidden&quot;==this.visibilityState&amp;&amp;(t.nonInteraction=!0);var i=this.opts[this.prevVisibilityState+&quot;MetricIndex&quot;];i&amp;&amp;(t[&quot;metric&quot;+i]=e),this.tracker.send(&quot;event&quot;,a(t,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}this.lastVisibilityChangeTime=+new Date},n.prototype.sessionHasTimedOut=function(){var t=(new Date-this.lastHitTime)/6e4;return this.opts.sessionTimeout&lt;t},n.prototype.overrideTrackerSendMethod=function(){this.originalTrackerSendMethod=this.tracker.send,this.tracker.send=function(){var t=Array.prototype.slice.call(arguments),e=t[0],i=l(e)?e.hitType:e,n=&quot;pageview&quot;==i;if(!n&amp;&amp;this.sessionHasTimedOut()){var s={transport:&quot;beacon&quot;};this.originalTrackerSendMethod.call(this.tracker,&quot;pageview&quot;,a(s,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}this.originalTrackerSendMethod.apply(this.tracker,t)}.bind(this)},n.prototype.overrideTrackerSendHitTask=function(){this.originalTrackerSendHitTask=this.tracker.get(&quot;sendHitTask&quot;),this.lastHitTime=+new Date,this.tracker.set(&quot;sendHitTask&quot;,function(t){this.originalTrackerSendHitTask(t),this.lastHitTime=+new Date}.bind(this))},n.prototype.changeTemplate=function(t,e){return t+&quot; =&gt; &quot;+e},n.prototype.remove=function(){this.tracker.set(&quot;sendHitTask&quot;,this.originalTrackerSendHitTask),this.tracker.send=this.originalTrackerSendMethod,document.removeEventListener(&quot;visibilitychange&quot;,this.handleVisibilityStateChange)},r(&quot;pageVisibilityTracker&quot;,n)},{&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;../utilities&quot;:14,&quot;object-assign&quot;:23}],10:[function(t,e,i){function n(t,e){o.track(t,o.plugins.SOCIAL_WIDGET_TRACKER),window.addEventListener&amp;&amp;(this.opts=s({fieldsObj:{},hitFilter:null},e),this.tracker=t,this.addWidgetListeners=this.addWidgetListeners.bind(this),this.addTwitterEventHandlers=this.addTwitterEventHandlers.bind(this),this.handleTweetEvents=this.handleTweetEvents.bind(this),this.handleFollowEvents=this.handleFollowEvents.bind(this),this.handleLikeEvents=this.handleLikeEvents.bind(this),this.handleUnlikeEvents=this.handleUnlikeEvents.bind(this),&quot;complete&quot;!=document.readyState?window.addEventListener(&quot;load&quot;,this.addWidgetListeners):this.addWidgetListeners())}var s=t(&quot;object-assign&quot;),r=t(&quot;../provide&quot;),o=t(&quot;../usage&quot;),a=t(&quot;../utilities&quot;).createFieldsObj;n.prototype.addWidgetListeners=function(){window.FB&amp;&amp;this.addFacebookEventHandlers(),window.twttr&amp;&amp;this.addTwitterEventHandlers()},n.prototype.addTwitterEventHandlers=function(){try{twttr.ready(function(){twttr.events.bind(&quot;tweet&quot;,this.handleTweetEvents),twttr.events.bind(&quot;follow&quot;,this.handleFollowEvents)}.bind(this))}catch(t){}},n.prototype.removeTwitterEventHandlers=function(){try{twttr.ready(function(){twttr.events.unbind(&quot;tweet&quot;,this.handleTweetEvents),twttr.events.unbind(&quot;follow&quot;,this.handleFollowEvents)}.bind(this))}catch(t){}},n.prototype.addFacebookEventHandlers=function(){try{FB.Event.subscribe(&quot;edge.create&quot;,this.handleLikeEvents),FB.Event.subscribe(&quot;edge.remove&quot;,this.handleUnlikeEvents)}catch(t){}},n.prototype.removeFacebookEventHandlers=function(){try{FB.Event.unsubscribe(&quot;edge.create&quot;,this.handleLikeEvents),FB.Event.unsubscribe(&quot;edge.remove&quot;,this.handleUnlikeEvents)}catch(t){}},n.prototype.handleTweetEvents=function(t){if(&quot;tweet&quot;==t.region){var e=t.data.url||t.target.getAttribute(&quot;data-url&quot;)||location.href,i={transport:&quot;beacon&quot;,socialNetwork:&quot;Twitter&quot;,socialAction:&quot;tweet&quot;,socialTarget:e};this.tracker.send(&quot;social&quot;,a(i,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}},n.prototype.handleFollowEvents=function(t){if(&quot;follow&quot;==t.region){var e=t.data.screen_name||t.target.getAttribute(&quot;data-screen-name&quot;),i={transport:&quot;beacon&quot;,socialNetwork:&quot;Twitter&quot;,socialAction:&quot;follow&quot;,socialTarget:e};this.tracker.send(&quot;social&quot;,a(i,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}},n.prototype.handleLikeEvents=function(t){var e={transport:&quot;beacon&quot;,socialNetwork:&quot;Facebook&quot;,socialAction:&quot;like&quot;,socialTarget:t};this.tracker.send(&quot;social&quot;,a(e,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))},n.prototype.handleUnlikeEvents=function(t){var e={transport:&quot;beacon&quot;,socialNetwork:&quot;Facebook&quot;,socialAction:&quot;unlike&quot;,socialTarget:t};this.tracker.send(&quot;social&quot;,a(e,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))},n.prototype.remove=function(){window.removeEventListener(&quot;load&quot;,this.addWidgetListeners),this.removeFacebookEventHandlers(),this.removeTwitterEventHandlers()},r(&quot;socialWidgetTracker&quot;,n)},{&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;../utilities&quot;:14,&quot;object-assign&quot;:23}],11:[function(t,e,i){function n(t,e){a.track(t,a.plugins.URL_CHANGE_TRACKER),history.pushState&amp;&amp;window.addEventListener&amp;&amp;(this.opts=r({shouldTrackUrlChange:this.shouldTrackUrlChange,fieldsObj:{},hitFilter:null},e),this.tracker=t,this.path=s(),this.updateTrackerData=this.updateTrackerData.bind(this),this.originalPushState=history.pushState,history.pushState=function(t,e){c(t)&amp;&amp;e&amp;&amp;(t.title=e),this.originalPushState.apply(history,arguments),this.updateTrackerData()}.bind(this),this.originalReplaceState=history.replaceState,history.replaceState=function(t,e){c(t)&amp;&amp;e&amp;&amp;(t.title=e),this.originalReplaceState.apply(history,arguments),this.updateTrackerData(!1)}.bind(this),window.addEventListener(&quot;popstate&quot;,this.updateTrackerData))}function s(){return location.pathname+location.search}var r=t(&quot;object-assign&quot;),o=t(&quot;../provide&quot;),a=t(&quot;../usage&quot;),l=t(&quot;../utilities&quot;).createFieldsObj,c=t(&quot;../utilities&quot;).isObject;n.prototype.updateTrackerData=function(t){t=t!==!1,setTimeout(function(){var e=this.path,i=s();if(e!=i&amp;&amp;this.opts.shouldTrackUrlChange.call(this,i,e)&amp;&amp;(this.path=i,this.tracker.set({page:i,title:c(history.state)&amp;&amp;history.state.title||document.title}),t)){var n={transport:&quot;beacon&quot;};this.tracker.send(&quot;pageview&quot;,l(n,this.opts.fieldsObj,this.tracker,this.opts.hitFilter))}}.bind(this),0)},n.prototype.shouldTrackUrlChange=function(t,e){return t&amp;&amp;e},n.prototype.remove=function(){window.removeEventListener(&quot;popstate&quot;,this.updateTrackerData),history.replaceState=this.originalReplaceState,history.pushState=this.originalPushState,this.tracker=null,this.opts=null,this.path=null,this.updateTrackerData=null,this.originalReplaceState=null,this.originalPushState=null},o(&quot;urlChangeTracker&quot;,n)},{&quot;../provide&quot;:12,&quot;../usage&quot;:13,&quot;../utilities&quot;:14,&quot;object-assign&quot;:23}],12:[function(t,e,i){var n=t(&quot;./constants&quot;),s=t(&quot;./utilities&quot;);(window.gaDevIds=window.gaDevIds||[]).push(n.DEV_ID),e.exports=function(t,e){var i=window.GoogleAnalyticsObject||&quot;ga&quot;;window[i]=window[i]||function(){(window[i].q=window[i].q||[]).push(arguments)},window[i](&quot;provide&quot;,t,e),window.gaplugins=window.gaplugins||{},window.gaplugins[s.capitalize(t)]=e}},{&quot;./constants&quot;:1,&quot;./utilities&quot;:14}],13:[function(t,e,i){function n(t){return parseInt(t||&quot;0&quot;,16).toString(2)}function s(t){return parseInt(t||&quot;0&quot;,2).toString(16)}function r(t,e){if(t.length&lt;e)for(var i=e-t.length;i;)t=&quot;0&quot;+t,i--;return t}function o(t,e){return t.substr(0,e)+1+t.substr(e+1)}function a(t,e){var i=t.get(c.USAGE_PARAM),a=r(n(i),u);a=o(a,u-e),t.set(c.USAGE_PARAM,s(a))}function l(t){t.set(c.VERSION_PARAM,c.VERSION)}var c=t(&quot;./constants&quot;),h={CLEAN_URL_TRACKER:1,EVENT_TRACKER:2,IMPRESSION_TRACKER:3,MEDIA_QUERY_TRACKER:4,OUTBOUND_FORM_TRACKER:5,OUTBOUND_LINK_TRACKER:6,PAGE_VISIBILITY_TRACKER:7,SOCIAL_WIDGET_TRACKER:8,URL_CHANGE_TRACKER:9},u=9;e.exports={track:function(t,e){l(t),a(t,e)},plugins:h}},{&quot;./constants&quot;:1}],14:[function(t,e,i){var n=t(&quot;object-assign&quot;),s=t(&quot;dom-utils/lib/get-attributes&quot;),r={createFieldsObj:function(t,e,i,s,r){if(&quot;function&quot;==typeof s){var o=i.get(&quot;buildHitTask&quot;);return{buildHitTask:function(i){i.set(t,null,!0),i.set(e,null,!0),s(i,r),o(i)}}}return n({},t,e)},getAttributeFields:function(t,e){var i=s(t),n={};return Object.keys(i).forEach(function(t){if(0===t.indexOf(e)&amp;&amp;t!=e+&quot;on&quot;){var s=i[t];&quot;true&quot;==s&amp;&amp;(s=!0),&quot;false&quot;==s&amp;&amp;(s=!1);var o=r.camelCase(t.slice(e.length));n[o]=s}}),n},domReady:function(t){&quot;loading&quot;==document.readyState?document.addEventListener(&quot;DOMContentLoaded&quot;,function e(){document.removeEventListener(&quot;DOMContentLoaded&quot;,e),t()}):t()},withTimeout:function(t,e){var i=!1;return setTimeout(t,e||2e3),function(){i||(i=!0,t())}},camelCase:function(t){return t.replace(/[\-\_]+(\w?)/g,function(t,e){return e.toUpperCase()})},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},isObject:function(t){return&quot;object&quot;==typeof t&amp;&amp;null!==t},isArray:Array.isArray||function(t){return&quot;[object Array]&quot;===Object.prototype.toString.call(t)},toArray:function(t){return r.isArray(t)?t:[t]}};e.exports=r},{&quot;dom-utils/lib/get-attributes&quot;:19,&quot;object-assign&quot;:23}],15:[function(t,e,i){function n(){return(new Date).getTime()}e.exports=Date.now||n},{}],16:[function(t,e,i){var n=t(&quot;date-now&quot;);e.exports=function(t,e,i){function s(){var h=n()-l;h&lt;e&amp;&amp;h&gt;0?r=setTimeout(s,e-h):(r=null,i||(c=t.apply(a,o),r||(a=o=null)))}var r,o,a,l,c;return null==e&amp;&amp;(e=100),function(){a=this,o=arguments,l=n();var h=i&amp;&amp;!r;return r||(r=setTimeout(s,e)),h&amp;&amp;(c=t.apply(a,o),a=o=null),c}}},{&quot;date-now&quot;:15}],17:[function(t,e,i){var n=t(&quot;./matches&quot;),s=t(&quot;./parents&quot;);e.exports=function(t,e,i){if(t&amp;&amp;1==t.nodeType&amp;&amp;e)for(var r,o=(i?[t]:[]).concat(s(t)),a=0;r=o[a];a++)if(n(r,e))return r}},{&quot;./matches&quot;:20,&quot;./parents&quot;:21}],18:[function(t,e,i){var n=t(&quot;./closest&quot;),s=t(&quot;./matches&quot;);e.exports=function(t,e,i,r,o){o=o||{};var a=function(t){if(o.deep&amp;&amp;&quot;function&quot;==typeof t.deepPath)for(var e,a=t.deepPath(),l=0;e=a[l];l++)1==e.nodeType&amp;&amp;s(e,i)&amp;&amp;(c=e);else var c=n(t.target,i,!0);c&amp;&amp;r.call(c,t,c)};return t.addEventListener(e,a,o.useCapture),{destroy:function(){t.removeEventListener(e,a,o.useCapture)}}}},{&quot;./closest&quot;:17,&quot;./matches&quot;:20}],19:[function(t,e,i){e.exports=function(t){var e={};if(!t||1!=t.nodeType)return e;var i=t.attributes;if(0===i.length)return{};for(var n,s=0;n=i[s];s++)e[n.name]=n.value;return e}},{}],20:[function(t,e,i){function n(t,e){if(&quot;string&quot;!=typeof e)return!1;if(r)return r.call(t,e);for(var i,n=t.parentNode.querySelectorAll(e),s=0;i=n[s];s++)if(i==t)return!0;return!1}var s=Element.prototype,r=s.matches||s.matchesSelector||s.webkitMatchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector;e.exports=function(t,e){if(t&amp;&amp;1==t.nodeType&amp;&amp;e){if(&quot;string&quot;==typeof e||1==e.nodeType)return t==e||n(t,e);if(&quot;length&quot;in e)for(var i,s=0;i=e[s];s++)if(t==i||n(t,i))return!0}return!1}},{}],21:[function(t,e,i){e.exports=function(t){for(var e=[];t&amp;&amp;t.parentNode&amp;&amp;1==t.parentNode.nodeType;)e.push(t=t.parentNode);return e}},{}],22:[function(t,e,i){var n=&quot;80&quot;,s=&quot;443&quot;,r=RegExp(&quot;:(&quot;+n+&quot;|&quot;+s+&quot;)$&quot;),o=document.createElement(&quot;a&quot;),a={};e.exports=function l(t){if(t=t&amp;&amp;&quot;.&quot;!=t?t:location.href,a[t])return a[t];if(o.href=t,&quot;.&quot;==t.charAt(0))return l(o.href);var e=o.protocol&amp;&amp;&quot;:&quot;!=o.protocol?o.protocol:location.protocol,i=o.port==n||o.port==s?&quot;&quot;:o.port;i=&quot;0&quot;==i?&quot;&quot;:i;var c=&quot;&quot;==o.host?location.host:o.host,h=&quot;&quot;==o.hostname?location.hostname:o.hostname;c=c.replace(r,&quot;&quot;);var u=o.origin?o.origin:e+&quot;//&quot;+c,d=&quot;/&quot;==o.pathname.charAt(0)?o.pathname:&quot;/&quot;+o.pathname;return a[t]={hash:o.hash,host:c,hostname:h,href:o.href,origin:u,pathname:d,port:i,protocol:e,search:o.search,fragment:o.hash.slice(1),path:d+o.search,query:o.search.slice(1)}}},{}],23:[function(t,e,i){&quot;use strict&quot;;function n(t){if(null===t||void 0===t)throw new TypeError(&quot;Object.assign cannot be called with null or undefined&quot;);return Object(t)}function s(){try{if(!Object.assign)return!1;var t=new String(&quot;abc&quot;);if(t[5]=&quot;de&quot;,&quot;5&quot;===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i&lt;10;i++)e[&quot;_&quot;+String.fromCharCode(i)]=i;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if(&quot;0123456789&quot;!==n.join(&quot;&quot;))return!1;var s={};return&quot;abcdefghijklmnopqrst&quot;.split(&quot;&quot;).forEach(function(t){s[t]=t}),&quot;abcdefghijklmnopqrst&quot;===Object.keys(Object.assign({},s)).join(&quot;&quot;)}catch(r){return!1}}var r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=s()?Object.assign:function(t,e){for(var i,s,a=n(t),l=1;l&lt;arguments.length;l++){i=Object(arguments[l]);for(var c in i)r.call(i,c)&amp;&amp;(a[c]=i[c]);if(Object.getOwnPropertySymbols){s=Object.getOwnPropertySymbols(i);for(var h=0;h&lt;s.length;h++)o.call(i,s[h])&amp;&amp;(a[s[h]]=i[s[h]])}}return a}},{}],24:[function(t,e,i){t(&quot;./plugins/clean-url-tracker&quot;),t(&quot;./plugins/event-tracker&quot;),t(&quot;./plugins/impression-tracker&quot;),t(&quot;./plugins/media-query-tracker&quot;),t(&quot;./plugins/outbound-form-tracker&quot;),t(&quot;./plugins/outbound-link-tracker&quot;),t(&quot;./plugins/page-visibility-tracker&quot;),t(&quot;./plugins/social-widget-tracker&quot;),t(&quot;./plugins/url-change-tracker&quot;),t(&quot;./plugins/autotrack&quot;)},{&quot;./plugins/autotrack&quot;:2,&quot;./plugins/clean-url-tracker&quot;:3,&quot;./plugins/event-tracker&quot;:4,&quot;./plugins/impression-tracker&quot;:5,&quot;./plugins/media-query-tracker&quot;:6,&quot;./plugins/outbound-form-tracker&quot;:7,&quot;./plugins/outbound-link-tracker&quot;:8,&quot;./plugins/page-visibility-tracker&quot;:9,&quot;./plugins/social-widget-tracker&quot;:10,&quot;./plugins/url-change-tracker&quot;:11}]},{},[24]);</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c">//# sourceMappingURL=autotrack.js.map</span></td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.09397s from github-fe163-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-QEzdGt0fcQ2wFqAuXjH/+KkInRT/DCJ9+GK3gIhtt9U=" src="https://assets-cdn.github.com/assets/frameworks-404cdd1add1f710db016a02e5e31fff8a9089d14ff0c227df862b780886db7d5.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-ACdL4CyoNxf9JsEhfXLq1LJXyEdYG2x0l60KiMzSByM=" src="https://assets-cdn.github.com/assets/github-00274be02ca83717fd26c1217d72ead4b257c847581b6c7497ad0a88ccd20723.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

