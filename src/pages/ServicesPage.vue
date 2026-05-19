<template>
  <q-page class="services-page bg-white">
    <section class="page-header text-white flex flex-center text-center q-py-xl relative-position">
      <div class="header-overlay"></div>
      <div class="header-content text-center q-py-xl relative-position z-top q-px-md">
        <div class="text-accent text-weight-bolder text-uppercase q-mb-sm tracking-wide animate-fade-down">What We Do</div>
        <h1 class="text-h2 text-weight-bolder text-white q-mb-md line-height-tight animate-fade-down">Services & Construction Products</h1>
        <div class="section-divider bg-accent q-mx-auto q-mb-lg"></div>
        <p class="text-h6 text-grey-4 text-weight-regular q-mx-auto" style="max-width: 600px;">
          Comprehensive solutions and premium materials tailored to create functional, efficient, and inspiring business environments.
        </p>
      </div>
    </section>

    <section class="services-grid-section q-py-xl q-px-md q-px-md-xl bg-white">
      <div class="q-mx-auto" style="max-width: 1440px;">
        <div class="row q-col-gutter-xl">
          <div 
            v-for="(s, index) in services" 
            :key="s.title" 
            class="col-12 col-sm-6 col-md-4 card-stagger flex" 
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <q-card flat class="full-width service-architecture-card shadow-3 bg-white flex column justify-between">
              <div>
                <div class="card-image-wrapper relative-position">
                  <q-img 
                    :src="getServiceImage(index)" 
                    class="service-card-img" 
                    height="220px"
                    fit="cover" 
                  />
                  <div class="card-accent-tag bg-accent"></div>
                </div>

                <q-card-section class="q-pa-xl pb-none">
                  <div class="text-h4 text-dark text-weight-bolder q-mb-sm line-height-tight">{{ s.title }}</div>
                  <p class="text-body1 text-grey-7 q-mb-lg text-weight-medium desc-height-lock">{{ s.desc }}</p>
                  
                  <q-separator class="q-mb-lg" color="grey-2" style="height: 2px;" />
                </q-card-section>
              </div>

              <q-card-section class="q-px-xl q-pb-xl q-pt-none grow-content">
                <q-list dense class="service-item-list row">
                  <q-item v-for="item in s.items" :key="item" class="col-12 text-dark q-px-none q-py-xs service-list-item">
                    <q-item-section avatar style="min-width: 24px; padding-right: 4px;">
                      <q-icon name="arrow_right_alt" color="primary" size="sm" class="list-arrow-icon" />
                    </q-item-section>
                    <q-item-section class="text-weight-bold text-body1 text-grey-9">{{ item }}</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="products-section bg-info q-py-xl q-px-md q-px-md-xl">
      <div class="q-mx-auto q-py-lg" style="max-width: 1440px;">
        <div class="text-center q-mb-xl">
          <div class="section-divider bg-dark q-mx-auto q-mb-md"></div>
          <h2 class="text-h2 text-dark text-weight-bolder q-mb-sm">Construction Products</h2>
          <p class="text-h6 text-grey-8 text-weight-regular">High-quality materials sourced and fabricated to bring designs to life.</p>
        </div>

        <div class="row q-col-gutter-xl">
          <div 
            v-for="(p, index) in products" 
            :key="p.title" 
            class="col-12 col-sm-6 col-md-4 card-stagger flex" 
            :style="{ animationDelay: `${(index * 0.1) + 0.4}s` }"
          >
            <q-card flat class="product-structural-card bg-white shadow-2 q-pa-lg full-width flex column">
              <q-card-section class="full-width">
                <div class="flex items-center q-mb-lg">
                  <div class="product-icon-frame bg-dark text-white q-mr-md flex flex-center">
                    <q-icon name="layers" size="sm" color="accent" />
                  </div>
                  <div class="text-h5 text-dark text-weight-bolder">{{ p.title }}</div>
                </div>
                
                <q-list dense class="q-pt-xs">
                  <q-item v-for="item in p.items" :key="item" class="q-px-none text-grey-9 q-py-sm product-list-item">
                    <q-item-section>
                      <div class="row items-center text-body1 text-weight-bold text-grey-8">
                        <div class="product-bullet-square bg-accent q-mr-md shadow-1"></div>
                        {{ item }}
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped>
.services-page { overflow-x: hidden; }

/* Typography & Layout Baselines */
.tracking-wide { letter-spacing: 2px; }
.line-height-tight { line-height: 1.2; }
.section-divider { width: 50px; height: 3px; }
.pb-none { padding-bottom: 0 !important; }
.grow-content { flex-grow: 1; }

/* Hero Page Header */
.page-header {
  min-height: 350px;
  background: url('https://images.unsplash.com/photo-1541888081622-c36399066468?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover fixed;
}
.header-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(49, 69, 68, 0.96) 0%, rgba(83, 128, 84, 0.9) 100%); }

/* Main Services Cards (Equal Height Architecture Framework) */
.service-architecture-card {
  border-radius: 24px 0 24px 0;
  border: 1px solid rgba(49, 69, 68, 0.05);
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card-image-wrapper { overflow: hidden; }
.service-card-img { transition: transform 0.6s ease; }
.card-accent-tag {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 6px;
  transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.desc-height-lock {
  min-height: 44px;
}

/* Card Interaction Animations */
.service-architecture-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 24px 48px rgba(49, 69, 68, 0.12) !important;
}
.service-architecture-card:hover .service-card-img { transform: scale(1.06); }
.service-architecture-card:hover .card-accent-tag { width: 100%; }

/* Service Lists Framework */
.service-list-item { transition: transform 0.2s ease; }
.list-arrow-icon { transform: translateX(-5px); opacity: 0; transition: all 0.2s ease; }
.service-list-item:hover { transform: translateX(5px); }
.service-list-item:hover .list-arrow-icon { transform: translateX(0); opacity: 1; }

/* Structural Products Display Elements */
.product-structural-card {
  border-radius: 0 24px 0 24px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.product-icon-frame { width: 44px; height: 44px; border-radius: 8px 0 8px 0; }
.product-bullet-square { width: 8px; height: 8px; border-radius: 2px; transition: transform 0.2s ease; }
.product-list-item { transition: transform 0.2s ease; }
.product-list-item:hover { transform: translateX(4px); }
.product-list-item:hover .product-bullet-square { transform: scale(1.2) rotate(45deg); }
.product-structural-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0,0,0,0.06) !important;
  border-color: var(--q-secondary);
}

/* Page Standard Animations */
.animate-fade-down { animation: fadeInDown 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
.card-stagger { animation: fadeInUpStagger 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; transform: translateY(40px); }

@keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInUpStagger { to { opacity: 1; transform: translateY(0); } }

@media (max-width: 600px) {
  .service-architecture-card { border-radius: 16px 0 16px 0; }
  .product-structural-card { border-radius: 0 16px 0 16px; }
}
</style>


<script setup>
const services = [
  { title: "Office Fit-Out", desc: "Design and build for modern workspaces.", items: ["Ceiling works", "Drywall partitions", "Flooring installation", "Painting works", "Electrical/Lighting", "HVAC", "Glass partitions", "Office layout"] },
  { title: "Office Renovation", desc: "Upgrade functionality and aesthetics.", items: ["Interior remodeling", "Workspace upgrades", "Structural improvements", "Space optimization", "Modernization", "Office expansion"] },
  { title: "Commercial Construction", desc: "Business establishment solutions.", items: ["Structural works", "Civil works", "Masonry/Concrete", "Roofing", "Site development", "Project management"] },
  { title: "Interior Design", desc: "Creative and practical interior solutions.", items: ["Space planning", "3D perspective", "Interior concepts", "Material selection", "Lighting design", "Furniture layout"] },
  { title: "Custom Furniture", desc: "Comfort and durability.", items: ["Modular workstations", "Executive desks", "Conference tables", "Reception counters", "Storage cabinets", "Ergonomic chairs"] },
  { title: "Electrical & Mechanical", desc: "Utility system maintenance.", items: ["Wiring", "Panel boards", "Lighting systems", "Air-conditioning", "Data/Network cabling", "Preventive maintenance"] }
];

const products = [
  { title: "Ceiling Systems", items: ["Gypsum board", "Acoustic ceiling", "Suspended ceiling"] },
  { title: "Flooring Solutions", items: ["Vinyl", "Carpet tiles", "Ceramic tiles", "Raised flooring"] },
  { title: "Partition Systems", items: ["Drywall", "Glass partitions", "Aluminum partitions"] },
  { title: "Furniture Solutions", items: ["Modular systems", "Built-in cabinets", "Workstations", "Custom furniture"] },
  { title: "Doors & Glass", items: ["Tempered glass", "Frameless doors", "Aluminum doors", "Wooden doors"] },
  { title: "Lighting & Electrical", items: ["LED lighting", "Smart lighting", "Power outlets", "Structured cabling"] }
];

// Dynamic Unsplash Image Router for the Services Grid
function getServiceImage(index) {
  const images = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // 0: Office Fit-Out
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // 1: Office Renovation (Fixed!)
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // 2: Commercial Construction
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // 3: Interior Design
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // 4: Custom Furniture
    'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'  // 5: Electrical & Mechanical
  ];
  return images[index] || images[0];
}
</script>