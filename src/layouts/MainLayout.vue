<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-dark q-py-xs transition-header" bordered>
      <q-toolbar class="q-py-sm q-px-md q-px-md-xl header-toolbar">
        <q-img 
          src="@/assets/logo.png" 
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
         <q-img src="@/assets/logo.png" width="120px" style="max-height: 40px;" fit="contain" />
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
</style>