<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-dark q-py-xs transition-header" bordered>
      <q-toolbar class="q-py-sm q-px-md q-px-md-xl header-toolbar">
        <q-img 
          src="../assets/logo.png" 
          width="150px" 
          style="max-height: 55px;" 
          fit="contain" 
          class="cursor-pointer logo-hover" 
          @click="$router.push('/')" 
        />
        
        <q-space />
        
        <q-tabs 
          v-if="$q.screen.gt.sm" 
          shrink 
          stretch 
          indicator-color="primary" 
          active-color="primary" 
          class="text-weight-bold nav-tabs"
        >
          <q-route-tab to="/" label="Home" class="nav-tab" />
          <q-route-tab to="/about" label="About Us" class="nav-tab" />
          <q-route-tab to="/services" label="Services" class="nav-tab" />
          <q-route-tab to="/contact" label="Contact" class="nav-tab" />
        </q-tabs>
        
        <q-space v-if="$q.screen.gt.sm" />
        
        <q-btn 
          v-if="$q.screen.gt.sm" 
          to="/contact" 
          color="accent" 
          text-color="dark" 
          label="Get A Quote" 
          unelevated 
          class="header-btn q-px-xl q-py-sm shadow-2" 
        />

        <q-btn 
          v-if="$q.screen.lt.md" 
          flat 
          dense 
          round 
          icon="menu" 
          size="lg"
          color="primary" 
          @click="toggleLeftDrawer" 
        />
      </q-toolbar>
    </q-header>
    
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-info" :width="280">
      <div class="q-pa-md flex flex-center bg-white shadow-1">
         <q-img src="../assets/logo.png" width="120px" style="max-height: 40px;" fit="contain" />
      </div>
      <q-list class="q-pt-md">
        <q-item clickable v-ripple to="/" exact class="drawer-item">
          <q-item-section avatar><q-icon name="home" color="primary" size="sm" /></q-item-section>
          <q-item-section class="text-dark text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about" exact class="drawer-item">
          <q-item-section avatar><q-icon name="info" color="primary" size="sm" /></q-item-section>
          <q-item-section class="text-dark text-weight-bold">About Us</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/services" exact class="drawer-item">
          <q-item-section avatar><q-icon name="business_center" color="primary" size="sm" /></q-item-section>
          <q-item-section class="text-dark text-weight-bold">Services</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contact" exact class="drawer-item">
          <q-item-section avatar><q-icon name="mail" color="primary" size="sm" /></q-item-section>
          <q-item-section class="text-dark text-weight-bold">Contact Us</q-item-section>
        </q-item>
        
        <q-separator class="q-my-lg" />
        
        <q-item>
          <q-btn to="/contact" color="accent" text-color="dark" label="Get A Quote" unelevated class="full-width text-weight-bold shadow-2 q-py-sm" />
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />

      <footer class="site-footer bg-dark text-white q-pt-xl">
        <div class="footer-grid-container q-px-md q-px-md-xl q-mx-auto q-pb-xl" style="max-width: 1440px;">
          <div class="row q-col-gutter-xl">
            
            <div class="col-12 col-md-4 brand-column">
              <q-img src="../assets/logo.png" width="160px" style="max-height: 55px; filter: brightness(0) invert(1);" fit="contain" class="q-mb-lg" />
              <p class="text-body1 text-grey-4 line-height-relaxed q-mb-xl text-weight-medium">
                Transforming commercial properties into innovative, efficient, and tailored workspaces. Built with quality workmanship and long-term asset value.
              </p>
              <div class="row q-gutter-md social-anchors">
                <q-btn round flat dense icon="facebook" size="md" class="social-icon bg-grey-9 text-white" href="https://facebook.com" target="_blank" />
                <q-btn round flat dense icon="business" size="md" class="social-icon bg-grey-9 text-white" href="https://linkedin.com" target="_blank" />
                <q-btn round flat dense icon="mail" size="md" class="social-icon bg-grey-9 text-white" :href="`mailto:${contactDetails.email}`" />
              </div>
            </div>

            <div class="col-6 col-md-2 link-column offset-md-1">
              <div class="text-subtitle1 text-weight-bolder text-white q-mb-lg tracking-wide text-uppercase relative-position column-heading">
                Company
                <div class="heading-accent bg-accent"></div>
              </div>
              <q-list class="footer-links-list">
                <q-item clickable v-ripple to="/" class="q-px-none footer-link-item"><q-item-section class="text-weight-bold">Home</q-item-section></q-item>
                <q-item clickable v-ripple to="/about" class="q-px-none footer-link-item"><q-item-section class="text-weight-bold">About Us</q-item-section></q-item>
                <q-item clickable v-ripple to="/services" class="q-px-none footer-link-item"><q-item-section class="text-weight-bold">Our Services</q-item-section></q-item>
                <q-item clickable v-ripple to="/contact" class="q-px-none footer-link-item"><q-item-section class="text-weight-bold">Contact Us</q-item-section></q-item>
              </q-list>
            </div>

            <div class="col-6 col-md-2 link-column">
              <div class="text-subtitle1 text-weight-bolder text-white q-mb-lg tracking-wide text-uppercase relative-position column-heading">
                Services
                <div class="heading-accent bg-accent"></div>
              </div>
              <q-list class="footer-links-list">
                <q-item clickable v-ripple to="/services" class="q-px-none footer-link-item"><q-item-section class="text-weight-medium">Office Fit-Out</q-item-section></q-item>
                <q-item clickable v-ripple to="/services" class="q-px-none footer-link-item"><q-item-section class="text-weight-medium">Office Renovation</q-item-section></q-item>
                <q-item clickable v-ripple to="/services" class="q-px-none footer-link-item"><q-item-section class="text-weight-medium">Interior Design</q-item-section></q-item>
                <q-item clickable v-ripple to="/services" class="q-px-none footer-link-item"><q-item-section class="text-weight-medium">Custom Furniture</q-item-section></q-item>
              </q-list>
            </div>

            <div class="col-12 col-sm-6 col-md-3 contact-column">
              <div class="text-subtitle1 text-weight-bolder text-white q-mb-lg tracking-wide text-uppercase relative-position column-heading">
                Get In Touch
                <div class="heading-accent bg-accent"></div>
              </div>
              <q-list dense class="q-gutter-y-sm">
                <q-item class="q-px-none items-start">
                  <q-item-section avatar style="min-width: 24px;" class="q-pt-xs"><q-icon name="location_on" color="accent" size="xs" /></q-item-section>
                  <q-item-section class="text-body2 text-grey-4 text-weight-medium">{{ contactDetails.address }}</q-item-section>
                </q-item>
                <q-item class="q-px-none items-center">
                  <q-item-section avatar style="min-width: 24px;"><q-icon name="phone" color="accent" size="xs" /></q-item-section>
                  <q-item-section class="text-body2 text-grey-4 text-weight-medium">{{ contactDetails.phone }}</q-item-section>
                </q-item>
                <q-item class="q-px-none items-center">
                  <q-item-section avatar style="min-width: 24px;"><q-icon name="email" color="accent" size="xs" /></q-item-section>
                  <q-item-section class="text-body2 text-grey-4 text-weight-medium break-word">{{ contactDetails.email }}</q-item-section>
                </q-item>
              </q-list>
            </div>

          </div>
        </div>

       <div class="footer-copyright bg-black text-grey-6 q-py-md text-center border-top-structural">
          <div class="row justify-between items-center q-px-md q-px-md-xl q-mx-auto" style="max-width: 1440px;">
            <div class="text-body2 text-weight-medium text-left-md text-center">
              &copy; {{ new Date().getFullYear() }} <span class="text-white font-weight-bold">Korix Construction</span>. All Rights Reserved. 
              <span class="q-mx-xs text-grey-8">|</span> 
              Developed by <a href="https://www.kaidtech.com" target="_blank" class="credit-link text-weight-bold">KAIDTECH</a>
            </div>
            <div class="text-caption text-grey-7 text-weight-bold q-mt-xs q-mt-sm-none tracking-wide text-uppercase">
              Built Quality. Delivering Trust.
            </div>
          </div>
        </div>
      </footer>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.header-toolbar { max-width: 1440px; margin: 0 auto; }
.transition-header { transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
.logo-hover { transition: transform 0.3s ease; }
.logo-hover:hover { transform: scale(1.02); }
.nav-tabs { margin-right: 2rem; }
.nav-tab { border-radius: 8px; margin: 0 4px; transition: background-color 0.3s ease; }
.nav-tab:hover { background-color: var(--q-info); }
.header-btn { border-radius: 8px; font-weight: 800; transition: all 0.3s ease; letter-spacing: 0.5px; }
.header-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(239, 200, 111, 0.4) !important; }
.drawer-item { border-radius: 0 24px 24px 0; margin-right: 16px; margin-bottom: 4px; transition: all 0.2s ease; }
.drawer-item:hover { background-color: rgba(83, 128, 84, 0.1); }
.credit-link {
  text-decoration: none;
  transition: color 0.2s ease;
  color: rgb(7, 163, 163);
}
.credit-link:hover {
  color: white !important;
  text-decoration: underline;
}
/* --- ARCHITECTURAL FOOTER STRUCTURAL LAYOUT --- */
.site-footer {
  border-top: 6px solid var(--q-primary);
}
.line-height-relaxed { line-height: 1.7; }
.tracking-wide { letter-spacing: 1.5px; }
.break-word { word-break: break-all; }

/* Column Title Accents */
.column-heading {
  font-size: 1.05rem;
  padding-bottom: 4px;
}
.heading-accent {
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 30px;
  height: 2px;
  border-radius: 2px;
}

/* Social Icon Badges */
.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px 0 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.social-icon:hover {
  background-color: var(--q-accent) !important;
  color: var(--q-dark) !important;
  transform: translateY(-3px) rotate(5deg);
}

/* Navigational Links Interaction States */
.footer-link-item {
  min-height: auto;
  padding: 6px 0;
  color: var(--q-info);
  transition: all 0.2s ease;
}
.footer-link-item:hover {
  color: var(--q-accent) !important;
  transform: translateX(4px);
  background-color: transparent !important;
}

/* Base Copyright Split */
.border-top-structural {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
</style>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// Global coordinate mappings used for the site footer layout elements
const contactDetails = {
  phone: "0924.2485491",
  email: "junekorix@gmail.com",
  address: "#78 Susano Rd, San Agustin, Novaliches, Quezon City, 1123"
}
</script>