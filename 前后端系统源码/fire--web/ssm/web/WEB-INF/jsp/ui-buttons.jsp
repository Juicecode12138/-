<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="Responsive Admin &amp; Dashboard Template based on Bootstrap 5">
	<meta name="author" content="AdminKit">
	<meta name="keywords" content="adminkit, bootstrap, bootstrap 5, admin, dashboard, template, responsive, css, sass, html, theme, front-end, ui kit, web">

	<link rel="shortcut icon" href="${pageContext.request.contextPath}/img/icons/icon-48x48.png" />

	<title>Buttons | AdminKit Demo</title>

	<link href="${pageContext.request.contextPath}/css/app.css" rel="stylesheet">
</head>

<body>
	<div class="wrapper">
		<nav id="sidebar" class="sidebar">
			<div class="sidebar-content js-simplebar">
				<a class="sidebar-brand" href="index.html">
          <span class="align-middle">AdminKit</span>
        </a>

				<ul class="sidebar-nav">
					<li class="sidebar-header">
						Pages
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="index.html">
              <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="pages-profile.html">
              <i class="align-middle" data-feather="user"></i> <span class="align-middle">Profile</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="pages-settings.html">
              <i class="align-middle" data-feather="settings"></i> <span class="align-middle">Settings</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="pages-invoice.html">
              <i class="align-middle" data-feather="credit-card"></i> <span class="align-middle">Invoice</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="pages-blank.html">
              <i class="align-middle" data-feather="book"></i> <span class="align-middle">Blank</span>
            </a>
					</li>

					<li class="sidebar-header">
						Tools & Components
					</li>
					<li class="sidebar-item active">
						<a data-target="#ui" data-toggle="collapse" class="sidebar-link">
              <i class="align-middle" data-feather="briefcase"></i> <span class="align-middle">UI Elements</span>
            </a>
						<ul id="ui" class="sidebar-dropdown list-unstyled collapse show" data-parent="#sidebar">
							<li class="sidebar-item"><a class="sidebar-link" href="ui-alerts.html">Alerts</a></li>
							<li class="sidebar-item active"><a class="sidebar-link" href="ui-buttons.html">Buttons</a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="ui-cards.html">Cards</a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="ui-general.html">General</a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="ui-grid.html">Grid</a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="ui-modals.html">Modals</a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="ui-typography.html">Typography</a></li>
						</ul>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="icons-feather.html">
              <i class="align-middle" data-feather="coffee"></i> <span class="align-middle">Icons</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a data-target="#forms" data-toggle="collapse" class="sidebar-link collapsed">
              <i class="align-middle" data-feather="check-circle"></i> <span class="align-middle">Forms</span>
            </a>
						<ul id="forms" class="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li class="sidebar-item"><a class="sidebar-link" href="forms-layouts.html">Form Layouts</a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="forms-basic-inputs.html">Basic Inputs</a></li>
						</ul>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="tables-bootstrap.html">
              <i class="align-middle" data-feather="list"></i> <span class="align-middle">Tables</span>
            </a>
					</li>

					<li class="sidebar-header">
						Plugins & Addons
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="charts-chartjs.html">
              <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Charts</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="maps-google.html">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Maps</span>
            </a>
					</li>
				</ul>

				<div class="sidebar-cta">
					<div class="sidebar-cta-content">
						<strong class="d-inline-block mb-2">Upgrade to Pro</strong>
						<div class="mb-3 text-sm">
							Are you looking for more components? Check out our premium version.
						</div>
						<a href="https://www.php.cn/xiazai/" target="_blank" class="btn btn-primary btn-block">Upgrade to Pro</a>
					</div>
				</div>
			</div>
		</nav>

		<div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<a class="sidebar-toggle d-flex">
          <i class="hamburger align-self-center"></i>
        </a>

				<form class="d-none d-sm-inline-block">
					<div class="input-group input-group-navbar">
						<input type="text" class="form-control" placeholder="Search…" aria-label="Search">
						<button class="btn" type="button">
              <i class="align-middle" data-feather="search"></i>
            </button>
					</div>
				</form>

				<div class="navbar-collapse collapse">
					<ul class="navbar-nav navbar-align">
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">
								<div class="position-relative">
									<i class="align-middle" data-feather="bell"></i>
									<span class="indicator">4</span>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="alertsDropdown">
								<div class="dropdown-menu-header">
									4 New Notifications
								</div>
								<div class="list-group">
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-danger" data-feather="alert-circle"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Update completed</div>
												<div class="text-muted small mt-1">Restart server 12 to complete the update.</div>
												<div class="text-muted small mt-1">30m ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-warning" data-feather="bell"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Lorem ipsum</div>
												<div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
												<div class="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-primary" data-feather="home"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Login from 192.186.1.8</div>
												<div class="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-success" data-feather="user-plus"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">New connection</div>
												<div class="text-muted small mt-1">Christina accepted your request.</div>
												<div class="text-muted small mt-1">14h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-menu-footer">
									<a href="#" class="text-muted">Show all notifications</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-toggle="dropdown">
								<div class="position-relative">
									<i class="align-middle" data-feather="message-square"></i>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="messagesDropdown">
								<div class="dropdown-menu-header">
									<div class="position-relative">
										4 New Messages
									</div>
								</div>
								<div class="list-group">
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-5.jpg" class="avatar img-fluid rounded-circle" alt="Vanessa Tucker">
											</div>
											<div class="col-10 pl-2">
												<div class="text-dark">Vanessa Tucker</div>
												<div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
												<div class="text-muted small mt-1">15m ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-2.jpg" class="avatar img-fluid rounded-circle" alt="William Harris">
											</div>
											<div class="col-10 pl-2">
												<div class="text-dark">William Harris</div>
												<div class="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
												<div class="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-4.jpg" class="avatar img-fluid rounded-circle" alt="Christina Mason">
											</div>
											<div class="col-10 pl-2">
												<div class="text-dark">Christina Mason</div>
												<div class="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
												<div class="text-muted small mt-1">4h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-3.jpg" class="avatar img-fluid rounded-circle" alt="Sharon Lessman">
											</div>
											<div class="col-10 pl-2">
												<div class="text-dark">Sharon Lessman</div>
												<div class="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
												<div class="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-menu-footer">
									<a href="#" class="text-muted">Show all messages</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-toggle="dropdown">
                <i class="align-middle" data-feather="settings"></i>
              </a>

							<a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-toggle="dropdown">
                <img src="img/avatars/avatar.jpg" class="avatar img-fluid rounded mr-1" alt="Charles Hall" /> <span class="text-dark">Charles Hall</span>
              </a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="pages-profile.html"><i class="align-middle mr-1" data-feather="user"></i> Profile</a>
								<a class="dropdown-item" href="#"><i class="align-middle mr-1" data-feather="pie-chart"></i> Analytics</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="pages-settings.html"><i class="align-middle mr-1" data-feather="settings"></i> Settings & Privacy</a>
								<a class="dropdown-item" href="#"><i class="align-middle mr-1" data-feather="help-circle"></i> Help Center</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Log out</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>

			<main class="content">
				<div class="container-fluid p-0">

					<h1 class="h3 mb-3">Buttons</h1>

					<div class="row">
						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Basic Buttons</h5>
									<h6 class="card-subtitle text-muted">Default Bootstrap buttons style.</h6>
								</div>
								<div class="card-body text-center">
									<div class="mb-3">
										<button class="btn btn-primary">Primary</button>
										<button class="btn btn-secondary">Secondary</button>
										<button class="btn btn-success">Success</button>
										<button class="btn btn-danger">Danger</button>
										<button class="btn btn-warning">Warning</button>
										<button class="btn btn-info">Info</button>
									</div>
									<div>
										<button class="btn btn-primary" disabled>Primary</button>
										<button class="btn btn-secondary" disabled>Secondary</button>
										<button class="btn btn-success" disabled>Success</button>
										<button class="btn btn-danger" disabled>Danger</button>
										<button class="btn btn-warning" disabled>Warning</button>
										<button class="btn btn-info" disabled>Info</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Rounded Buttons</h5>
									<h6 class="card-subtitle text-muted">Rounded Bootstrap buttons.</h6>
								</div>
								<div class="card-body text-center">
									<div class="mb-3">
										<button class="btn btn-pill btn-primary">Primary</button>
										<button class="btn btn-pill btn-secondary">Secondary</button>
										<button class="btn btn-pill btn-success">Success</button>
										<button class="btn btn-pill btn-danger">Danger</button>
										<button class="btn btn-pill btn-warning">Warning</button>
										<button class="btn btn-pill btn-info">Info</button>
									</div>
									<div>
										<button class="btn btn-pill btn-primary" disabled>Primary</button>
										<button class="btn btn-pill btn-secondary" disabled>Secondary</button>
										<button class="btn btn-pill btn-success" disabled>Success</button>
										<button class="btn btn-pill btn-danger" disabled>Danger</button>
										<button class="btn btn-pill btn-warning" disabled>Warning</button>
										<button class="btn btn-pill btn-info" disabled>Info</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Outline Buttons</h5>
									<h6 class="card-subtitle text-muted">Buttons without background color.</h6>
								</div>
								<div class="card-body text-center">
									<div class="mb-3">
										<button class="btn btn-outline-primary">Primary</button>
										<button class="btn btn-outline-secondary">Secondary</button>
										<button class="btn btn-outline-success">Success</button>
										<button class="btn btn-outline-danger">Danger</button>
										<button class="btn btn-outline-warning">Warning</button>
										<button class="btn btn-outline-info">Info</button>
									</div>
									<div>
										<button class="btn btn-outline-primary" disabled>Primary</button>
										<button class="btn btn-outline-secondary" disabled>Secondary</button>
										<button class="btn btn-outline-success" disabled>Success</button>
										<button class="btn btn-outline-danger" disabled>Danger</button>
										<button class="btn btn-outline-warning" disabled>Warning</button>
										<button class="btn btn-outline-info" disabled>Info</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Square Buttons</h5>
									<h6 class="card-subtitle text-muted">Buttons without border radius.</h6>
								</div>
								<div class="card-body text-center">
									<div class="mb-3">
										<button class="btn btn-square btn-primary">Primary</button>
										<button class="btn btn-square btn-secondary">Secondary</button>
										<button class="btn btn-square btn-success">Success</button>
										<button class="btn btn-square btn-danger">Danger</button>
										<button class="btn btn-square btn-warning">Warning</button>
										<button class="btn btn-square btn-info">Info</button>
									</div>
									<div>
										<button class="btn btn-square btn-primary" disabled>Primary</button>
										<button class="btn btn-square btn-secondary" disabled>Secondary</button>
										<button class="btn btn-square btn-success" disabled>Success</button>
										<button class="btn btn-square btn-danger" disabled>Danger</button>
										<button class="btn btn-square btn-warning" disabled>Warning</button>
										<button class="btn btn-square btn-info" disabled>Info</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Icon Buttons</h5>
									<h6 class="card-subtitle text-muted">Default Bootstrap buttons with icons.</h6>
								</div>
								<div class="card-body text-center">
									<div class="mb-3">
										<button class="btn btn-primary"><i class="far fa-smile"></i> Primary</button>
										<button class="btn btn-secondary"><i class="fas fa-globe-americas"></i> Secondary</button>
										<button class="btn btn-success"><i class="fas fa-check"></i> Success</button>
										<button class="btn btn-danger"><i class="fas fa-times"></i> Danger</button>
										<button class="btn btn-warning"><i class="fas fa-exclamation"></i> Warning</button>
										<button class="btn btn-info"><i class="fas fa-info"></i> Info</button>
									</div>

									<div>
										<button class="btn btn-primary"><i class="far fa-smile"></i></button>
										<button class="btn btn-secondary"><i class="fas fa-globe-americas"></i></button>
										<button class="btn btn-success"><i class="fas fa-check"></i></button>
										<button class="btn btn-danger"><i class="fas fa-times"></i></button>
										<button class="btn btn-warning"><i class="fas fa-exclamation"></i></button>
										<button class="btn btn-info"><i class="fas fa-info"></i></button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Button Sizes</h5>
									<h6 class="card-subtitle text-muted">Fancy larger or smaller buttons.</h6>
								</div>
								<div class="card-body text-center">
									<div class="mb-3">
										<button class="btn btn-primary btn-sm">Small</button>
										<button class="btn btn-primary">Medium</button>
										<button class="btn btn-primary btn-lg">Large</button>
									</div>
									<div>
										<button class="btn btn-primary btn-sm"><i class="fas fa-globe-americas"></i> Small</button>
										<button class="btn btn-primary"><i class="fas fa-globe-americas"></i> Medium</button>
										<button class="btn btn-primary btn-lg"><i class="fas fa-globe-americas"></i> Large</button>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Button Dropdown</h5>
									<h6 class="card-subtitle text-muted">Dropdowns styles with buttons.</h6>
								</div>
								<div class="card-body text-center">
									<div class="mb-3">
										<div class="btn-group">
											<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Primary
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group">
											<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Secondary
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group">
											<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Success
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group">
											<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Danger
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group">
											<button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Warning
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group">
											<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Info
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
									</div>

									<div>
										<div class="btn-group btn-group-sm">
											<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Primary
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group btn-group-sm">
											<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Secondary
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group btn-group-sm">
											<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Success
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group btn-group-sm">
											<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Danger
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group btn-group-sm">
											<button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Warning
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="btn-group btn-group-sm">
											<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Info
              </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Button Group</h5>
									<h6 class="card-subtitle text-muted">Button group components.</h6>
								</div>
								<div class="card-body">
									<h6 class="card-subtitle mb-2 text-muted">Horizontal button group</h6>
									<div class="btn-group btn-group-lg mb-3" role="group" aria-label="Large button group">
										<button type="button" class="btn btn-secondary">Left</button>
										<button type="button" class="btn btn-secondary">Middle</button>
										<button type="button" class="btn btn-secondary">Right</button>
									</div>
									<br>
									<div class="btn-group mb-3" role="group" aria-label="Default button group">
										<button type="button" class="btn btn-secondary">Left</button>
										<button type="button" class="btn btn-secondary">Middle</button>
										<button type="button" class="btn btn-secondary">Right</button>
									</div>
									<br>
									<div class="btn-group btn-group-sm mb-4" role="group" aria-label="Small button group">
										<button type="button" class="btn btn-secondary">Left</button>
										<button type="button" class="btn btn-secondary">Middle</button>
										<button type="button" class="btn btn-secondary">Right</button>
									</div>

									<h6 class="card-subtitle mb-2 text-muted">Button toolbar</h6>
									<div class="btn-toolbar mb-4" role="toolbar" aria-label="Toolbar with button groups">
										<div class="btn-group mr-2" role="group" aria-label="First group">
											<button type="button" class="btn btn-secondary">1</button>
											<button type="button" class="btn btn-secondary">2</button>
											<button type="button" class="btn btn-secondary">3</button>
											<button type="button" class="btn btn-secondary">4</button>
										</div>
										<div class="btn-group mr-2" role="group" aria-label="Second group">
											<button type="button" class="btn btn-secondary">5</button>
											<button type="button" class="btn btn-secondary">6</button>
											<button type="button" class="btn btn-secondary">7</button>
										</div>
										<div class="btn-group" role="group" aria-label="Third group">
											<button type="button" class="btn btn-secondary">8</button>
										</div>
									</div>

									<h6 class="card-subtitle mb-2 text-muted">Vertical button group</h6>
									<div class="btn-toolbar">
										<div class="btn-group-vertical mr-2" role="group" aria-label="Vertical button group">
											<button type="button" class="btn btn-primary">Button</button>
											<button type="button" class="btn btn-primary">Button</button>
											<button type="button" class="btn btn-primary">Button</button>
										</div>
										<div class="btn-group-vertical mr-2" role="group" aria-label="Vertical button group">
											<button type="button" class="btn btn-success">Button</button>
											<button type="button" class="btn btn-success">Button</button>
											<button type="button" class="btn btn-success">Button</button>
										</div>
										<div class="btn-group-vertical mr-2" role="group" aria-label="Vertical button group">
											<button type="button" class="btn btn-warning">Button</button>
											<button type="button" class="btn btn-warning">Button</button>
											<button type="button" class="btn btn-warning">Button</button>
										</div>
										<div class="btn-group-vertical mr-2" role="group" aria-label="Vertical button group">
											<button type="button" class="btn btn-danger">Button</button>
											<button type="button" class="btn btn-danger">Button</button>
											<button type="button" class="btn btn-danger">Button</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.row -->

				</div>
			</main>

			<footer class="footer">
				<div class="container-fluid">
					<div class="row text-muted">
						<div class="col-6 text-left">
							<p class="mb-0">
								<a href="index.html" class="text-muted"><strong>AdminKit Demo</strong></a> &copy;
							</p>
						</div>
						<div class="col-6 text-right">
							<ul class="list-inline">
								<li class="list-inline-item">
									<a class="text-muted" href="#">Support</a>
								</li>
								<li class="list-inline-item">
									<a class="text-muted" href="#">Help Center</a>
								</li>
								<li class="list-inline-item">
									<a class="text-muted" href="#">Privacy</a>
								</li>
								<li class="list-inline-item">
									<a class="text-muted" href="#">Terms</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>

	<script src="${pageContext.request.contextPath}/js/app.js"></script>

</body>

</html>