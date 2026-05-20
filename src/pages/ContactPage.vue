<template>
  <q-page class="contact-page bg-white">
    <section class="page-header bg-dark text-white flex flex-center text-center q-py-xl relative-position">
      <div class="header-overlay"></div>
      <div class="header-content animate-fade-down relative-position z-top q-py-xl q-px-md">
        <div class="text-accent text-weight-bolder text-uppercase q-mb-md tracking-wide">Contact Us</div>
        <h1 class="text-h1 text-weight-bolder q-mb-none line-height-tight">Get In Touch</h1>
        <div class="section-divider bg-accent q-mx-auto q-mt-lg"></div>
      </div>
    </section>

    <section class="contact-content q-px-xl q-px-md-xl q-py-xl">
      <div class="row q-col-gutter-xl justify-between q-py-lg" style="max-width: 1400px; margin: 0 auto;">
        
        <div class="col-12 col-md-5 animate-fade-right">
          <div class="q-pr-md-lg">
            <div class="text-accent text-weight-bold text-uppercase q-mb-sm tracking-wide">Contact Details</div>
            <h2 class="text-h2 text-dark text-weight-bolder q-mb-md line-height-tight">
              We are here to <span class="text-secondary">help you build.</span>
            </h2>
            <p class="text-body1 text-grey-8 q-mb-xl text-weight-medium" style="max-width: 90%;">
              Reach out to us for consultations, project estimates, or any inquiries regarding your workspace transformation.
            </p>

            <div class="row q-col-gutter-y-xl q-col-gutter-x-md">
              
              <div class="col-12 col-sm-6">
                <div class="flex no-wrap">
                  <div class="icon-outline-box text-accent q-mr-md flex flex-center">
                    <q-icon name="far fa-map" size="sm" />
                  </div>
                  <div>
                    <div class="text-h6 text-weight-bolder text-dark q-mb-xs line-height-tight">Office Address</div>
                    <div class="text-body2 text-grey-7">{{ contact.address }}</div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6">
                <div class="flex no-wrap">
                  <div class="icon-outline-box text-accent q-mr-md flex flex-center">
                    <q-icon name="fas fa-mobile-alt" size="sm" />
                  </div>
                  <div>
                    <div class="text-h6 text-weight-bolder text-dark q-mb-xs line-height-tight">Phone Number</div>
                    <div class="text-body2 text-grey-7">{{ contact.phone }}</div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6">
                <div class="flex no-wrap">
                  <div class="icon-outline-box text-accent q-mr-md flex flex-center">
                    <q-icon name="far fa-envelope" size="sm" />
                  </div>
                  <div>
                    <div class="text-h6 text-weight-bolder text-dark q-mb-xs line-height-tight">Email Address</div>
                    <div class="text-body2 text-grey-7">{{ contact.email }}</div>
                    <div class="text-body2 text-grey-7">{{ contact.email2 }}</div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6">
                <div class="flex no-wrap">
                  <div class="icon-outline-box text-accent q-mr-md flex flex-center">
                    <q-icon name="far fa-user" size="sm" />
                  </div>
                  <div>
                    <div class="text-h6 text-weight-bolder text-dark q-mb-xs line-height-tight">{{ contact.name }}</div>
                    <div class="text-body2 text-grey-7">{{ contact.role }}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12 col-md-7 animate-fade-left q-mt-xl q-mt-md-none flex">
          <div class="map-wrapper full-width relative-position">
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.73188630244!2d121.0355939736455!3d14.727744573954105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b055c1d04d5b%3A0xc9ae1b1d5b6f063e!2s78%20Susano%20Rd%2C%20San%20Agustin%2C%20Novaliches%2C%20Quezon%20City%2C%201123%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1779193064282!5m2!1sen!2sph" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="responsive-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped>
.contact-page { overflow-x: hidden; }

/* Typography */
.tracking-wide { letter-spacing: 2px; }
.line-height-tight { line-height: 1.15; }
.section-divider { width: 50px; height: 3px; }

/* Hero Header */
.page-header {
  min-height: 380px;
}
.header-overlay { position: absolute; inset: 0; background: rgba(5, 78, 39, 0.9); }

/* Left Side: Contact Detail Icons */
.icon-outline-box {
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 50%;
  border: 1.5px solid var(--q-accent);
  background-color: transparent;
  transition: all 0.3s ease;
}
.icon-outline-box:hover {
  background-color: var(--q-accent);
  color: white !important;
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(239, 200, 111, 0.3);
}

/* Right Side: Map Styling */
.map-wrapper {
  min-height: 450px;
  height: 100%;
}
.map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(23, 126, 10, 0.2);
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Animations */
.animate-fade-down { animation: fadeInDown 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
.animate-fade-right { animation: fadeInRight 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }
.animate-fade-left { animation: fadeInLeft 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }

@keyframes fadeInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInRight { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeInLeft { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }

@media (max-width: 1024px) {
  .contact-content { padding-top: 2rem !important; padding-bottom: 2rem !important; }
  .map-wrapper {
    position: relative;
    height: 400px;
  }
}
</style>

<script setup>
import { ref } from 'vue';

const contact = {
  name: "Ms. June Ramirez",
  role: "Sales Manager",
  phone: "0924.2485491",
  email: "junekorix@gmail.com",
  email2: "saleskorix@gmail.com",
  address: "#78 Susano Rd, San Agustin, Novaliches, Quezon City, 1123"
};

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: null,
  message: ''
});

const serviceOptions = [
  'Office Fit-Out',
  'Office Renovation',
  'Commercial Construction',
  'Interior Design & Space Planning',
  'Custom Office Furniture',
  'Electrical & Mechanical Works',
  'Other / General Inquiry'
];
</script>