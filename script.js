
/* ════ PRODUCT DATA ════ */
const products = {
  cpu:[
    {name:'AMD Ryzen 3 4300G',spec:'4-core/8T · 4.0GHz · AM4 · Radeon Vega 6 iGPU · DDR4 · 65W',price:3200,img:'AMD Ryzen 3 4300G.png',brand:'amd',socket:'AM4',ramType:'ddr4',hasIgpu:true,tdp:65},
    {name:'AMD Ryzen 5 5600G',spec:'6-core/12T · 4.4GHz · AM4 · Radeon Vega 7 iGPU · DDR4 · 65W',price:4500,img:'AMD Ryzen 5 5600G.png',brand:'amd',socket:'AM4',ramType:'ddr4',hasIgpu:true,tdp:65},
    {name:'Intel Core i3-12100',spec:'4-core/8T · 4.3GHz · LGA1700 · UHD 730 iGPU · DDR4/DDR5 · 60W',price:5200,img:'Intel Core i3-12100.png',brand:'intel',socket:'LGA1700',ramType:'ddr4_ddr5',hasIgpu:true,tdp:60},
    {name:'AMD Ryzen 5 5600',spec:'6-core/12T · 4.4GHz · AM4 · No iGPU · DDR4 · 65W',price:4200,img:'AMD Ryzen 5 5600G.png',brand:'amd',socket:'AM4',ramType:'ddr4',hasIgpu:false,tdp:65},
    {name:'Intel Core i5-12400F',spec:'6-core/12T · 4.4GHz · LGA1700 · No iGPU · DDR4/DDR5 · 65W',price:7500,img:'Intel Core i5-12400F.png',brand:'intel',socket:'LGA1700',ramType:'ddr4_ddr5',hasIgpu:false,tdp:65},
    {name:'Intel Core i5-14600K',spec:'14-core/20T · 5.3GHz · LGA1700 · UHD 770 · DDR4/DDR5 · 125W',price:12500,img:'https://production-rdj-web-asset.s3.ap-east-1.amazonaws.com/products/cpu/details/1829/image/thumbnail/intel-core-i5-14600k-lga1700-without-cooler-boxed-1762566144.jpg',brand:'intel',socket:'LGA1700',ramType:'ddr4_ddr5',hasIgpu:true,tdp:125},
    {name:'AMD Ryzen 7 7700X',spec:'8-core/16T · 5.4GHz · AM5 · DDR5 · 105W · Zen 4',price:18000,img:'AMD Ryzen 7 7700X.png',brand:'amd',socket:'AM5',ramType:'ddr5',hasIgpu:false,tdp:105},
  ],
  ram:[
    {name:'Kingston Fury Beast 8GB',spec:'1×8GB · DDR4-3200 · 288-pin DIMM',price:1100,img:'Kingston Fury Beast 8GB.png',brand:'',ramType:'ddr4'},
    {name:'Kingston Fury Beast 16GB',spec:'2×8GB · DDR4-3200 · CL16 · Dual channel',price:2200,img:'Kingston Fury Beast 16GB.png',brand:'',ramType:'ddr4'},
    {name:'G.Skill Ripjaws V 16GB',spec:'2×8GB · DDR4-3600 · CL18 · XMP 2.0',price:2600,img:'G.Skill Ripjaws V 16GB.png',brand:'',ramType:'ddr4'},
    {name:'Corsair Vengeance RGB 16GB',spec:'2×8GB · DDR4-3200 · CL16 · ARGB lighting',price:2800,img:'Corsair Vengeance RGB 16GB.png',brand:'',ramType:'ddr4'},
    {name:'Kingston Fury Beast 32GB',spec:'2×16GB · DDR4-3200 · CL16 · Dual channel',price:4000,img:'Kingston Fury Beast 32GB.png',brand:'',ramType:'ddr4'},
    {name:'Lexar Thor 16GB DDR5',spec:'2×8GB · DDR5-6000 · CL38 · XMP 3.0',price:15000,img:'Lexar Thor 16GB DDR5.png',brand:'',ramType:'ddr5'},
    {name:'G.Skill Trident Z5 32GB DDR5',spec:'2×16GB · DDR5-6400 · CL32 · XMP 3.0 · RGB',price:7500,img:'G.Skill Trident Z5 32GB DDR5.png',brand:'',ramType:'ddr5'},
  ],
  gpu:[
    {name:'AMD Radeon RX 6500 XT 4GB',spec:'4GB GDDR6 · 64-bit · PCIe 4.0 x4 · ~107W',price:5000,img:'https://static.gigabyte.com/StaticFile/Image/Global/d15cad83e1c2762011697825f65a467a/ProductRemoveBg/30743',brand:'amd',powerReq:107},
    {name:'AMD Radeon RX 6600 8GB',spec:'8GB GDDR6 · 128-bit · FSR 2.0 · ~132W',price:8500,img:'AMD Radeon RX 6600 8GB.png',brand:'amd',powerReq:132},
    {name:'NVIDIA GeForce RTX 3060 12GB',spec:'12GB GDDR6 · 192-bit · DLSS 2.0 · ~170W',price:12000,img:'NVIDIA GeForce RTX 3060 12GB.png',brand:'nvidia',powerReq:170},
    {name:'AMD Radeon RX 7600 8GB',spec:'8GB GDDR6 · 128-bit · FSR 3 · ~165W',price:12500,img:'AMD Radeon RX 7600 8GB.png',brand:'amd',powerReq:165},
    {name:'NVIDIA GeForce RTX 4060 8GB',spec:'8GB GDDR6 · 128-bit · DLSS 3 / Frame Gen · ~115W',price:15000,img:'NVIDIA GeForce RTX 4060 8GB.png',brand:'nvidia',powerReq:115},
    {name:'AMD Radeon RX 7700 XT 12GB',spec:'12GB GDDR6 · 192-bit · FSR 3 · ~245W',price:18500,img:'AMD Radeon RX 7700 XT 12GB.png',brand:'amd',powerReq:245},
    {name:'NVIDIA GeForce RTX 4070 12GB',spec:'12GB GDDR6X · 192-bit · DLSS 3 · ~200W',price:28000,img:'https://netcodex.ph/wp-content/uploads/2024/12/MSI-Nvidia-Geforce-RTX-4070-GAMING-X-SLIM-12G-Black-192-bit-12GB-GDDR6X-Graphics-Card.png',brand:'nvidia',powerReq:200},
  ],
  case:[
    {name:'Tecware Nexus M',spec:'mATX · Mesh front · 1×120mm fan · TG side',price:750,img:'Tecware Nexus M.png',brand:'',formFactor:'matx'},
    {name:'DeepCool MATREXX 30',spec:'mATX Mid-tower · TG side · 1×120mm fan',price:900,img:'DeepCool MATREXX 30.png',brand:'',formFactor:'matx'},
    {name:'Tecware Forge M',spec:'ATX Mid-tower · Mesh front · ARGB fans · TG side',price:1800,img:'Tecware Forge M.png',brand:'',formFactor:'atx'},
    {name:'DeepCool CC560',spec:'ATX Mid-tower · 4×ARGB fans · TG side & front',price:2500,img:'DeepCool CC560.png',brand:'',formFactor:'atx'},
    {name:'Phanteks Eclipse G360A',spec:'ATX Mid-tower · 3×120mm ARGB · Mesh front · TG',price:3800,img:'Phanteks Eclipse G360A.png',brand:'',formFactor:'atx'},
    {name:'Lian Li LANCOOL 205',spec:'ATX Mid-tower · 2×200mm ARGB front fans · TG',price:4500,img:'Lian Li LANCOOL 205.png',brand:'',formFactor:'atx'},
    {name:'Fractal Design Pop Air',spec:'ATX Mid-tower · Mesh panels · 3×120mm fans · TG',price:5500,img:'Fractal Design Pop Air.png',brand:'',formFactor:'atx'},
  ],
  mb:[
    {name:'ASUS Prime A520M-K',spec:'mATX · AM4 · DDR4 · PCIe 3.0 · 1×M.2',price:2800,img:'https://www.asus.com/media/global/products/klnhxkefsyvowbzy/P_setting_xxx_0_90_end_500.png',brand:'',socket:'AM4',ramType:'ddr4',formFactor:'matx'},
    {name:'MSI B450M PRO-VDH Max',spec:'mATX · AM4 · DDR4 · PCIe 3.0 · 2×M.2',price:3200,img:'https://storage-asset.msi.com/global/picture/product/product_6_20190708134634_5d22d8bac2965.webp',brand:'',socket:'AM4',ramType:'ddr4',formFactor:'matx'},
    {name:'ASUS TUF Gaming B550M-Plus',spec:'mATX · AM4 · DDR4 · PCIe 4.0 · Wi-Fi · 2×M.2',price:5500,img:'https://dlcdnwebimgs.asus.com/gain/28ba936c-41c8-4f4e-b639-29c65ec0b427/w692',brand:'',socket:'AM4',ramType:'ddr4',formFactor:'matx'},
    {name:'MSI PRO B660M-A DDR4',spec:'mATX · LGA1700 · DDR4 · PCIe 4.0 · 2×M.2',price:5000,img:'MSI PRO B660M-A DDR4.png',brand:'',socket:'LGA1700',ramType:'ddr4',formFactor:'matx'},
    {name:'MSI MAG B760M Mortar WiFi',spec:'mATX · LGA1700 · DDR5 · PCIe 5.0 · Wi-Fi 6E · 3×M.2',price:7500,img:'MSI MAG B760M Mortar WiFi.png',brand:'',socket:'LGA1700',ramType:'ddr5',formFactor:'matx'},
    {name:'ASUS Prime B650M-A WiFi',spec:'mATX · AM5 · DDR5 · PCIe 5.0 · Wi-Fi 6 · 2×M.2',price:8000,img:'https://bermorzone.com.ph/wp-content/uploads/2022/10/Prime-B650M-A-WIFI-II-btz-ph-1.webp',brand:'',socket:'AM5',ramType:'ddr5',formFactor:'matx'},
    {name:'ASUS ROG STRIX B650E-F',spec:'ATX · AM5 · DDR5 · PCIe 5.0 · Wi-Fi 6E · 4×M.2',price:14500,img:'ASUS ROG STRIX B650E-F.png',brand:'',socket:'AM5',ramType:'ddr5',formFactor:'atx'},
  ],
  storage:[
    {name:'Kingston A400 480GB SATA',spec:'2.5" SATA SSD · R500/W450 MB/s · 3-year',price:900,img:'Kingston A400 480GB SATA.png',brand:''},
    {name:'Kingston NV2 500GB NVMe',spec:'M.2 2280 · PCIe 4.0 · R3500/W2100 MB/s · 3-year',price:1500,img:'Kingston NV2 500GB NVMe.png',brand:''},
    {name:'Kingston NV2 1TB NVMe',spec:'M.2 2280 · PCIe 4.0 · R3500/W2800 MB/s · 3-year',price:2500,img:'Kingston NV2 1TB NVMe.png',brand:''},
    {name:'Seagate Barracuda 2TB HDD',spec:'3.5" SATA · 7200 RPM · 256MB cache · Mass storage',price:2800,img:'Seagate Barracuda 2TB HDD.png',brand:''},
    {name:'Samsung 870 EVO 1TB SATA',spec:'2.5" SATA SSD · R560/W530 MB/s · 5-year',price:3500,img:'Samsung 870 EVO 1TB SATA.png',brand:''},
    {name:'WD Black SN770 1TB NVMe',spec:'M.2 2280 · PCIe 4.0 · R5150/W4900 MB/s · 5-year',price:4000,img:'WD Black SN770 1TB NVMe.png',brand:''},
    {name:'Samsung 980 Pro 2TB NVMe',spec:'M.2 2280 · PCIe 4.0 · R7000/W5100 MB/s · 5-year',price:8500,img:'Samsung 980 Pro 2TB NVMe.png',brand:''},
  ],
  psu:[
    {name:'FSP 450W 80+ Bronze',spec:'450W · 80+ Bronze · Non-modular · 2-year',price:1500,img:'FSP 450W 80+ Bronze.png',brand:'',wattage:450},
    {name:'MSI MAG A550BN',spec:'550W · 80+ Bronze · Non-modular · 5-year',price:2000,img:'MSI MAG A550BN.png',brand:'',wattage:550},
    {name:'Corsair CV650',spec:'650W · 80+ Bronze · Non-modular · 3-year',price:2500,img:'Corsair CV650.png',brand:'',wattage:650},
    {name:'Sama G650 Gold',spec:'650W · 80+ Gold · Non-modular · 5-year',price:2800,img:'Sama G650 Gold.png',brand:'',wattage:650},
    {name:'DeepCool PQ650M Gold',spec:'650W · 80+ Gold · Semi-modular · 10-year',price:3500,img:'DeepCool PQ650M Gold.png',brand:'',wattage:650},
    {name:'Seasonic Focus GX-750',spec:'750W · 80+ Gold · Fully modular · 10-year',price:5500,img:'https://netcodex.ph/wp-content/uploads/2025/07/ATX3.1-FOCUS-GX-750-PSU-Box-1462x1080-1.webp',brand:'',wattage:750},
    {name:'Corsair RM850x Gold',spec:'850W · 80+ Gold · Fully modular · 10-year',price:7000,img:'Corsair RM850x Gold.png',brand:'',wattage:850},
  ],
  cooler:[
    {name:'DeepCool AG300',spec:'Single tower · 92mm fan · TDP 130W',price:600,img:'DeepCool AG300.png',brand:'',tdpRating:130},
    {name:'Thermalright Assassin X 120 SE',spec:'Single tower · 120mm fan · TDP 200W',price:900,img:'Thermalright Assassin X 120 SE.png',brand:'',tdpRating:200},
    {name:'ID-Cooling SE-224-XTS',spec:'4 heat pipe · 120mm PWM fan · TDP 200W',price:1200,img:'ID-Cooling SE-224-XTS.png',brand:'',tdpRating:200},
    {name:'DeepCool AK400',spec:'4 heat pipe · 120mm PWM fan · TDP 220W',price:1800,img:'DeepCool AK400.png',brand:'',tdpRating:220},
    {name:'Thermalright Peerless Assassin 120 SE',spec:'Dual tower · 2×120mm fans · TDP 250W',price:2500,img:'Thermalright Peerless Assassin 120 SE.png',brand:'',tdpRating:250},
    {name:'DeepCool LT520 AIO 240mm',spec:'240mm AIO · 2×120mm fans · TDP 350W+',price:4500,img:'DeepCool LT520 AIO 240mm.png',brand:'',tdpRating:350},
    {name:'Corsair iCUE H150i Elite LCD',spec:'360mm AIO · 3×120mm fans · TDP 350W+',price:9500,img:'Corsair iCUE H150i Elite LCD.png',brand:'',tdpRating:350},
  ],
  monitor:[
    {name:'Acer K202HQL 19.5"',spec:'19.5" · 1366x768 · TN · 60Hz',price:3500,img:'Acer K202HQL.png',brand:''},
    {name:'Philips 221V8 21.5"',spec:'21.5" · 1920x1080 FHD · VA · 75Hz',price:4500,img:'https://images.philips.com/is/image/philipsconsumer/a03c6f52723045f29e30b01b00c223e9?$pnglarge$&wid=700&hei=700',brand:''},
    {name:'LG 24MK430H-B 23.8"',spec:'23.8" · 1920x1080 FHD · IPS · 75Hz',price:5500,img:'LG 24MK430H-B.png',brand:''},
    {name:'Acer Nitro VG240Y 23.8"',spec:'23.8" · 1920x1080 FHD · IPS · 144Hz · FreeSync',price:7000,img:'Acer Nitro VG240Y.png',brand:''},
    {name:'MSI G2712 27"',spec:'27" · 1920x1080 FHD · IPS · 170Hz · FreeSync Premium',price:9500,img:'MSI G2712.png',brand:''},
    {name:'LG 32MP60G-B 31.5"',spec:'31.5" · 1920x1080 FHD · IPS · 75Hz',price:11000,img:'LG 32MP60G-B.png',brand:''},
    {name:'MSI G321Q 31.5"',spec:'31.5" · 2560x1440 QHD · IPS · 165Hz',price:15000,img:'https://netcodex.ph/wp-content/uploads/2024/08/MSI-G321Q.png.webp',brand:''},
  ],
  keyboard:[
    {name:'Meetion MT-K9200',spec:'Full-size · Membrane · Wired USB · Budget office',price:350,img:'Meetion MT-K9200.png',brand:''},
    {name:'Redragon K552 Kumara',spec:'TKL 87-key · Mechanical · RGB · Metal top plate',price:1200,img:'Redragon K552 Kumara.png',brand:''},
    {name:'Rexus MX5.2 TKL',spec:'TKL · Mechanical · RGB · PBT keycaps',price:1800,img:'Rexus MX5.2 TKL.png',brand:''},
    {name:'Tecware Phantom Elite',spec:'Full-size · Mechanical · Per-key RGB · Aluminum frame',price:2200,img:'https://static.wixstatic.com/media/8517ed_f651ee46d3ae4788ad22aec0ed6bb233~mv2.png/v1/fill/w_1148,h_948,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8517ed_f651ee46d3ae4788ad22aec0ed6bb233~mv2.png',brand:''},
    {name:'Logitech K845',spec:'Full-size · Mechanical (Blue/Red/Brown) · White backlight',price:3500,img:'https://www.logitech.com/content/dam/logitech/en/products/keyboards/k845/gallery/k845-gallery-1-new.png',brand:''},
    {name:'HyperX Alloy Origins',spec:'Full-size · HyperX mechanical · Per-key RGB · Aircraft-grade aluminum',price:4500,img:'https://hp.widen.net/content/xjs5mhamsl/webp/xjs5mhamsl.png?w=573&h=430&dpi=72&color=ffffff00',brand:''},
    {name:'Razer BlackWidow V3',spec:'Full-size · Razer mechanical · Chroma RGB',price:5500,img:'Razer BlackWidow V3.png',brand:''},
  ],
  mouse:[
    {name:'A4Tech OP-330',spec:'Wired USB · 1600 DPI · Optical · Budget office',price:280,img:'A4Tech OP-330.png',brand:''},
    {name:'Meetion MT-M362',spec:'Wired USB · 1600 DPI · 4 buttons · Ergonomic',price:400,img:'https://img.yfisher.com/1660528547931.png',brand:''},
    {name:'Redragon M711 Cobra',spec:'Wired · 10,000 DPI · 7 programmable buttons · RGB',price:900,img:'Redragon M711 Cobra.png',brand:''},
    {name:'Logitech G304 Lightspeed',spec:'Wireless · 12,000 DPI HERO · 250hr battery · 99g',price:2200,img:'Logitech G304 Lightspeed.png',brand:''},
    {name:'Razer DeathAdder V2',spec:'Wired · 20,000 DPI Focus+ · 8 buttons · 82g',price:2800,img:'Razer DeathAdder V2.png',brand:''},
    {name:'Logitech G502 HERO',spec:'Wired · 25,600 DPI HERO · 11 buttons · RGB',price:3500,img:'Logitech G502 HERO.png',brand:''},
    {name:'Razer Viper V2 Pro',spec:'Wireless · 30,000 DPI Focus Pro · 58g ultralight',price:7000,img:'Razer Viper V2 Pro.png',brand:''},
  ],
  webcam:[
    {name:'A4Tech PK-910H',spec:'1080p · 30fps · Built-in mic · USB 2.0',price:800,img:'A4Tech PK-910H.png',brand:''},
    {name:'Genius WideCam F100',spec:'1080p · 30fps · 120° wide FOV · Built-in mic',price:1500,img:'Genius WideCam F100.png',brand:''},
    {name:'Razer Kiyo X',spec:'1080p/30fps · 720p/60fps · 82° FOV · Auto focus',price:2800,img:'Razer Kiyo X.png',brand:''},
    {name:'Razer Kiyo (Original)',spec:'1080p/30fps · Built-in ring light · Adjustable brightness',price:4500,img:'https://ecommerce.datablitz.com.ph/cdn/shop/products/4_e4d5a1f3-3ebc-4d44-a7a8-12d11379f9c5.png?v=1739863952',brand:''},
    {name:'Logitech C920e',spec:'1080p/30fps · 78° FOV · Dual stereo mics · Privacy shutter',price:5500,img:'Logitech C920e.png',brand:''},
    {name:'Razer Kiyo Pro',spec:'1080p/60fps uncompressed · HDR · Sony STARVIS CMOS',price:8500,img:'Razer Kiyo Pro.png',brand:''},
    {name:'Logitech Brio 4K',spec:'4K/30fps · 1080p/60fps · 5× zoom · HDR · Windows Hello',price:12000,img:'https://resource.logitech.com/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-1.png',brand:''},
  ],
};

const categoryLabels = {
  cpu:'Processor (CPU)',ram:'Memory (RAM)',gpu:'GPU (Graphics Card)',
  case:'Case',mb:'Motherboard',storage:'Storage',
  psu:'Power Supply (PSU)',cooler:'CPU Cooler',monitor:'Monitor',
  keyboard:'Keyboard',mouse:'Mouse',webcam:'Webcam'
};
const slotIcons = { cpu:'⚙️', ram:'🧩', gpu:'🖼️', case:'🖥️', mb:'🔌', storage:'💾', psu:'⚡', cooler:'🌀', monitor:'🖥️', keyboard:'⌨️', mouse:'🖱️', webcam:'📷' };

const buildPrices = { entry:17580, mid:41000, high:64500 };
const buildNames  = { entry:'Entry Level Build', mid:'Mid Range Build', high:'High End Build', cart:'Cart Checkout' };

let canvasBuild = {};
let canvasPickerCat = 'cpu';

function checkCompatibility(build) {
  const issues = [];
  const warnings = [];
  const cpu = build.cpu ? products.cpu[build.cpu.idx] : null;
  const mb  = build.mb  ? products.mb[build.mb.idx]   : null;
  const ram = build.ram ? products.ram[build.ram.idx]  : null;
  const gpu = build.gpu ? products.gpu[build.gpu.idx]  : null;
  const psu = build.psu ? products.psu[build.psu.idx]  : null;
  const cooler = build.cooler ? products.cooler[build.cooler.idx] : null;
  const caseItem = build.case ? products.case[build.case.idx] : null;

  if (cpu && mb) {
    if (cpu.socket !== mb.socket) {
      issues.push(`⚠️ CPU socket mismatch: ${cpu.name} uses ${cpu.socket} but ${mb.name} supports ${mb.socket}.`);
    }
  }
  if (cpu && ram) {
    const cpuRam = cpu.ramType;
    const ramType = ram.ramType;
    if (cpuRam === 'ddr4' && ramType === 'ddr5') {
      issues.push(`⚠️ RAM type mismatch: ${cpu.name} supports DDR4 only, but ${ram.name} is DDR5.`);
    } else if (cpuRam === 'ddr5' && ramType === 'ddr4') {
      issues.push(`⚠️ RAM type mismatch: ${cpu.name} supports DDR5 only, but ${ram.name} is DDR4.`);
    }
  }
  if (mb && ram) {
    const mbRam = mb.ramType;
    const ramType = ram.ramType;
    if (mbRam === 'ddr4' && ramType === 'ddr5') {
      issues.push(`⚠️ RAM type mismatch: ${mb.name} supports DDR4 only, but ${ram.name} is DDR5.`);
    } else if (mbRam === 'ddr5' && ramType === 'ddr4') {
      issues.push(`⚠️ RAM type mismatch: ${mb.name} supports DDR5 only, but ${ram.name} is DDR4.`);
    }
  }
  if (cpu && !build.gpu && !cpu.hasIgpu) {
    warnings.push(`💡 ${cpu.name} has no integrated graphics. You'll need a GPU to get video output.`);
  }
  if (psu) {
    let estimatedPower = 50;
    if (cpu) estimatedPower += cpu.tdp || 65;
    if (gpu) estimatedPower += gpu.powerReq || 0;
    estimatedPower += 30;
    const headroom = psu.wattage - estimatedPower;
    if (headroom < 0) {
      issues.push(`⚡ PSU underpowered: estimated system draw ~${estimatedPower}W but ${psu.name} is only ${psu.wattage}W.`);
    } else if (headroom < 80) {
      warnings.push(`⚡ Low PSU headroom: estimated ~${estimatedPower}W with ${psu.name} at ${psu.wattage}W. Consider a higher wattage unit.`);
    }
  }
  if (cooler && cpu) {
    const cpuTdp = cpu.tdp || 65;
    const coolerTdp = cooler.tdpRating || 130;
    if (coolerTdp < cpuTdp) {
      warnings.push(`🌡️ Cooler may struggle: ${cpu.name} has ${cpuTdp}W TDP but ${cooler.name} is rated for ${coolerTdp}W.`);
    }
  }
  if (caseItem && mb) {
    if (caseItem.formFactor === 'matx' && mb.formFactor === 'atx') {
      issues.push(`🗄️ Form factor mismatch: ${caseItem.name} is mATX-sized but ${mb.name} is a full ATX board.`);
    }
  }
  const coreParts = ['cpu', 'mb', 'ram', 'storage', 'psu'];
  const missingCore = coreParts.filter(p => !build[p]);
  if (missingCore.length > 0 && missingCore.length < 5) {
    const labels = missingCore.map(p => categoryLabels[p]).join(', ');
    warnings.push(`🔩 Build incomplete: still missing ${labels}.`);
  }
  return { issues, warnings };
}

function getSlotStatus(cat, build) {
  if (!build[cat]) return 'empty';
  const { issues, warnings } = checkCompatibility(build);
  const catName = categoryLabels[cat] || cat;
  if (issues.some(i => i.toLowerCase().includes(catName.toLowerCase().split(' ')[0]))) return 'error';
  if (warnings.some(w => w.toLowerCase().includes(catName.toLowerCase().split(' ')[0]))) return 'warn';
  return 'ok';
}

function getPickCardCompat(cat, idx) {
  const testBuild = { ...canvasBuild, [cat]: { cat, idx } };
  const { issues, warnings } = checkCompatibility(testBuild);
  if (issues.length > warnings.length || (issues.length > 0)) {
    return { status: 'error', msg: issues[0] };
  }
  if (warnings.length > 0) {
    return { status: 'warn', msg: warnings[0] };
  }
  return { status: 'ok', msg: '✓ Compatible with your current build' };
}

function renderCanvas() {
  const view = document.getElementById('pc-canvas-view');
  const { issues, warnings } = checkCompatibility(canvasBuild);
  const totalParts = Object.keys(canvasBuild).length;
  const totalPrice = Object.values(canvasBuild).reduce((s,v) => s + products[v.cat][v.idx].price, 0);

  let bannerClass = 'idle', bannerIcon = '🖥️', bannerTitle = 'Start building your PC', bannerItems = ['Add components below to check compatibility as you go.'];
  if (totalParts > 0) {
    if (issues.length > 0) {
      bannerClass = 'error'; bannerIcon = '❌'; bannerTitle = `${issues.length} compatibility issue${issues.length>1?'s':''} found`;
      bannerItems = issues;
    } else if (warnings.length > 0) {
      bannerClass = 'warn'; bannerIcon = '⚠️'; bannerTitle = `${warnings.length} thing${warnings.length>1?'s':''} to double-check`;
      bannerItems = warnings;
    } else {
      bannerClass = 'ok'; bannerIcon = '✅'; bannerTitle = 'All good! Your build looks compatible.';
      bannerItems = ['All selected parts are compatible with each other.'];
    }
  }

  const allCats = Object.keys(categoryLabels);
  let slotsHtml = '';
  allCats.forEach(cat => {
    const item = canvasBuild[cat] ? products[cat][canvasBuild[cat].idx] : null;
    const status = item ? getSlotStatus(cat, canvasBuild) : 'empty';
    const slotClass = item ? `has-item${status==='error'?' compat-error':status==='warn'?' compat-warn':''}` : '';
    if (item) {
      const compat = getPickCardCompat(cat, canvasBuild[cat].idx);
      const issueMsg = compat.status !== 'ok' ? `<div class="slot-item-issue ${compat.status}">${compat.msg.substring(0,80)}${compat.msg.length>80?'…':''}</div>` : '';
      slotsHtml += `<div class="build-slot ${slotClass}" onclick="openPickerFor('${cat}')">
        <button class="slot-remove-btn" onclick="event.stopPropagation();removeFromCanvas('${cat}')">✕</button>
        <div class="slot-header"><span class="slot-category">${categoryLabels[cat]}</span><span class="slot-status-dot ${status}"></span></div>
        <img class="slot-item-img" src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
        <div class="slot-item-name">${item.name}</div>
        <div class="slot-item-price">₱${item.price.toLocaleString()}</div>
        ${issueMsg}
        <div class="slot-click-hint">Click to change</div>
      </div>`;
    } else {
      slotsHtml += `<div class="build-slot" onclick="openPickerFor('${cat}')">
        <div class="slot-header"><span class="slot-category">${categoryLabels[cat]}</span><span class="slot-status-dot"></span></div>
        <div class="slot-empty"><div class="slot-empty-icon">${slotIcons[cat]}</div><div class="slot-empty-text">Click to add</div></div>
      </div>`;
    }
  });

  const pickerCat = canvasPickerCat;
  let pickerHtml = '';
  products[pickerCat].forEach((p, i) => {
    const inCanvas = canvasBuild[pickerCat] && canvasBuild[pickerCat].idx === i;
    const compat = getPickCardCompat(pickerCat, i);
    const compatHtml = canvasBuild[pickerCat] ? '' : (totalParts > 0 ? `<div class="pick-card-compat ${compat.status}">${compat.msg.substring(0,60)}${compat.msg.length>60?'…':''}</div>` : '');
    pickerHtml += `<div class="canvas-pick-card${inCanvas?' selected':''}">
      <div class="pick-card-img-box"><img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'" style="max-width:80px;max-height:80px;object-fit:contain;"></div>
      <div class="pick-card-name">${p.name}</div>
      ${compatHtml}
      <div class="pick-card-price">₱${p.price.toLocaleString()}</div>
      <button class="${inCanvas?'pick-btn selected-btn':'pick-btn'}" onclick="${inCanvas?`removeFromCanvas('${pickerCat}')`:`addToCanvas('${pickerCat}',${i})`}">${inCanvas?'✓ Chosen':'+ Select'}</button>
    </div>`;
  });

  const catTabsHtml = Object.keys(categoryLabels).map(c => `<button class="canvas-cat-tab${c===pickerCat?' active':''}" onclick="switchPickerCat('${c}')">${categoryLabels[c]}</button>`).join('');

  view.innerHTML = `
    <div class="canvas-hero">
      <div class="canvas-hero-text">
        <div class="canvas-hero-title">🖥️ PC Canvas</div>
        <div class="canvas-hero-sub">Build your custom PC step by step. Every part is automatically checked for compatibility as you add it — no guesswork, no wasted money.</div>
      </div>
      <div class="canvas-hero-actions">
        <button class="canvas-clear-btn" onclick="clearCanvas()">Clear Build</button>
        ${totalParts > 0 ? `<button class="canvas-checkout-btn" onclick="openModal('cart')">Order Build · ₱${totalPrice.toLocaleString()}</button>` : ''}
      </div>
    </div>
    <div class="compat-banner ${bannerClass}">
      <div class="compat-icon">${bannerIcon}</div>
      <div>
        <div class="compat-title">${bannerTitle}</div>
        <ul class="compat-issues">${bannerItems.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="canvas-summary">
      <div>
        <div class="canvas-total-label">Build Total</div>
        <div class="canvas-total-val">₱${totalPrice.toLocaleString()}</div>
      </div>
      <div class="canvas-stats">
        <div class="canvas-stat"><div class="canvas-stat-val">${totalParts}</div><div class="canvas-stat-label">PARTS SELECTED</div></div>
        <div class="canvas-stat"><div class="canvas-stat-val" style="color:${issues.length>0?'var(--sw-red)':'var(--sw-green)'}">${issues.length}</div><div class="canvas-stat-label">CONFLICTS</div></div>
        <div class="canvas-stat"><div class="canvas-stat-val" style="color:${warnings.length>0?'var(--sw-amber)':'var(--sw-muted)'}">${warnings.length}</div><div class="canvas-stat-label">WARNINGS</div></div>
      </div>
    </div>
    <div class="canvas-slots-grid">${slotsHtml}</div>
    <div class="canvas-picker-section">
      <div class="canvas-picker-title">Add / Change Parts</div>
      <div class="canvas-cat-tabs">${catTabsHtml}</div>
      <div class="canvas-picker-grid">${pickerHtml}</div>
    </div>
  `;
}

function openPickerFor(cat) {
  canvasPickerCat = cat;
  renderCanvas();
  setTimeout(() => {
    const pickerEl = document.querySelector('.canvas-picker-section');
    if (pickerEl) pickerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}
function switchPickerCat(cat) { canvasPickerCat = cat; renderCanvas(); }
function addToCanvas(cat, idx) { canvasBuild[cat] = { cat, idx }; renderCanvas(); showToast(`Added to build: ${products[cat][idx].name}`); }
function removeFromCanvas(cat) { delete canvasBuild[cat]; renderCanvas(); }
function clearCanvas() { canvasBuild = {}; renderCanvas(); showToast('Build cleared.'); }

let currentView = 'canvas';
function showCanvasOrFilter(mode, el) {
  document.querySelectorAll('.comp-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const content = document.getElementById('comp-content');
  const canvas = document.getElementById('pc-canvas-view');
  if (mode === 'canvas') {
    currentView = 'canvas';
    content.style.display = 'none';
    canvas.style.display = 'block';
    renderCanvas();
  } else {
    currentView = mode;
    content.style.display = 'block';
    canvas.style.display = 'none';
    renderComponents(mode);
  }
}

function toggleMobileNav() {
  const menu = document.getElementById('nav-menu');
  const btn  = document.getElementById('hamburger');
  menu.classList.toggle('mobile-open');
  btn.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('mobile-open') ? 'hidden' : '';
}
function closeMobileNav() {
  document.getElementById('nav-menu').classList.remove('mobile-open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

function openModal(type) {
  const modal = document.getElementById('payment-modal');
  document.getElementById('modal-title').textContent = (type === 'cart' ? 'Cart' : buildNames[type] || 'Your Order') + ' — Place Order';
  document.getElementById('modal-sub').textContent = 'Choose your preferred payment method and fill in your details.';
  let price;
  if (type === 'cart') {
    price = cart.reduce((s,c) => s + c.price * c.qty, 0);
    if (price === 0) price = Object.values(canvasBuild).reduce((s,v) => s + products[v.cat][v.idx].price, 0);
  } else {
    price = buildPrices[type] || 0;
  }
  document.getElementById('modal-price-display').textContent = '₱' + price.toLocaleString();
  document.getElementById('modal-build-label').textContent = type === 'cart' ? 'Order Total' : (buildNames[type] || 'Package');
  switchPayTab('gcash');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('payment-modal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('payment-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
function switchPayTab(method) {
  document.querySelectorAll('#modal-pay-tabs .pay-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.method === method));
  document.querySelectorAll('.pay-form').forEach(form => form.classList.toggle('active', form.id === 'pay-' + method));
}
document.getElementById('modal-pay-tabs').addEventListener('click', function(e) {
  const btn = e.target.closest('.pay-tab');
  if (btn && btn.dataset.method) switchPayTab(btn.dataset.method);
});
function confirmOrder(method) {
  const activeForm = document.querySelector('.pay-form.active');
  if (activeForm) {
    const inputs = Array.from(activeForm.querySelectorAll('input'))
      .filter(input => !input.readOnly && input.type !== 'button' && input.type !== 'submit');

    const missing = inputs.filter(input => input.value.trim() === '');
    if (missing.length > 0) {
      alert('Please complete all required payment fields before confirming.');
      return;
    }

    const emailInput = inputs.find(input => input.type === 'email');
    if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      return;
    }
  }

  closeModal();
  showToast('✅ Order placed via ' + method + '! We\'ll contact you within 30 minutes.');
}
function selectBank(el, bank) {
  document.querySelectorAll('.bank-option').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  document.getElementById('bank-selected').value = bank;
}

function submitContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = Array.from(form.querySelectorAll('input, textarea'))
    .filter(el => el.type !== 'button' && el.type !== 'submit');
  const missingField = fields.find(el => el.value.trim() === '');
  if (missingField) {
    alert('Please complete all contact fields before sending your message.');
    missingField.focus();
    return;
  }

  const emailField = form.querySelector('input[type="email"]');
  if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
    alert('Please enter a valid email address.');
    emailField.focus();
    return;
  }

  form.querySelectorAll('input, textarea').forEach(el => el.value = '');
  showToast('Message sent! We\'ll get back to you within 24 hours. ✉️');
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 4000);
}

function showSection(id, el) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  if (el) el.classList.add('active');
  else { const map={home:'nav-home',components:'nav-components',contact:'nav-contact',about:'nav-about'}; const navEl=document.getElementById(map[id]); if(navEl) navEl.classList.add('active'); }
  window.scrollTo(0,0);
  if (id === 'components') {
    if (currentView === 'canvas') renderCanvas();
    else renderComponents(currentView);
  }
}
function scrollToBuilds() {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById('home').classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('nav-home').classList.add('active');
  setTimeout(() => document.getElementById('find-your-build').scrollIntoView({behavior:'smooth'}), 50);
}
function scrollToPkg(anchorId) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById('home').classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('nav-home').classList.add('active');
  setTimeout(() => { const el=document.getElementById(anchorId); if(el) el.scrollIntoView({behavior:'smooth'}); }, 50);
}

function brandChip(brand) {
  if (!brand) return '';
  const map={amd:'brand-amd',intel:'brand-intel',nvidia:'brand-nvidia'};
  const label = brand==='nvidia'?'NVIDIA':brand.toUpperCase();
  return '<span class="brand-chip '+map[brand]+'">'+label+'</span>';
}

function renderComponents(filter) {
  filter = filter || 'all';
  const container = document.getElementById('comp-content');
  const cats = filter === 'all' ? Object.keys(products) : [filter];
  let html = '';
  cats.forEach(cat => {
    html += '<div class="comp-category-block"><h3 class="comp-section-title">'+categoryLabels[cat]+'</h3><div class="products-grid">';
    products[cat].forEach((p,i) => {
      const inCanvas = canvasBuild[cat] && canvasBuild[cat].idx === i;
      html += '<div class="product-card"><div class="product-img-box"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy">'+brandChip(p.brand)+'</div>'
            + '<div class="product-info"><p class="product-name">'+p.name+'</p><p class="product-spec">'+p.spec+'</p>'
            + '<p class="product-price">₱'+p.price.toLocaleString()+'</p>'
            + '<div class="product-actions">'
            + '<button class="add-cart-btn" onclick="addToCart(\''+cat+'\','+i+')">+ Cart</button>'
            + '<button class="add-canvas-btn'+(inCanvas?' in-canvas':'')+'" onclick="addToCanvasFromList(\''+cat+'\','+i+')">'+(inCanvas?'✓ In Canvas':'+ Canvas')+'</button>'
            + '</div></div></div>';
    });
    html += '</div></div>';
  });
  container.innerHTML = html;
}
function addToCanvasFromList(cat, idx) {
  canvasBuild[cat] = { cat, idx };
  renderComponents(currentView === 'all' ? 'all' : currentView);
  showToast(`Added to PC Canvas: ${products[cat][idx].name}`);
}

let cart = [];
function addToCart(cat, idx) {
  const p = products[cat][idx];
  const existing = cart.find(c => c.cat===cat && c.idx===idx);
  if (existing) { existing.qty++; } else { cart.push({...p,cat,idx,qty:1}); }
  updateCartBadge();
  const badge = document.getElementById('cart-count');
  badge.style.transform = 'scale(1.4)';
  setTimeout(() => badge.style.transform = '', 220);
  showToast('Added to cart: '+p.name);
}
function updateCartBadge() { document.getElementById('cart-count').textContent = cart.reduce((s,c)=>s+c.qty,0); }
function toggleCart() {
  const sidebar  = document.getElementById('cart-sidebar');
  const overlay  = document.getElementById('cart-overlay');
  const isOpen   = sidebar.style.right === '0px';
  sidebar.style.right   = isOpen ? '-400px' : '0px';
  overlay.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) renderCart();
}
function renderCart() {
  const container = document.getElementById('cart-items');
  const footer    = document.getElementById('cart-footer');
  if (!cart.length) {
    container.innerHTML = '<p style="color:var(--sw-muted);font-size:13px;text-align:center;padding:40px 0;">No items yet.<br>Add parts from the Components page.</p>';
    footer.style.display='none'; return;
  }
  let total=0, html='';
  cart.forEach((item,i)=>{
    total += item.price * item.qty;
    html += '<div class="cart-item"><div class="cart-item-img"><img src="'+item.img+'" alt="'+item.name+'" loading="lazy"></div>'
          + '<div style="flex:1;min-width:0;"><p class="cart-item-name">'+item.name+'</p><p class="cart-item-price">₱'+(item.price*item.qty).toLocaleString()+'</p></div>'
          + '<div class="qty-controls"><button class="qty-btn" onclick="changeQty('+i+',-1)">−</button><span class="qty-val">'+item.qty+'</span><button class="qty-btn" onclick="changeQty('+i+',1)">+</button></div></div>';
  });
  container.innerHTML = html;
  document.getElementById('cart-total').textContent = '₱'+total.toLocaleString();
  footer.style.display = 'block';
}
function changeQty(i, delta) { cart[i].qty += delta; if (cart[i].qty <= 0) cart.splice(i,1); updateCartBadge(); renderCart(); }
function clearCart() { cart=[]; updateCartBadge(); renderCart(); }

window.addEventListener('scroll', () => {
  document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 10);
});

document.getElementById('comp-content').style.display = 'none';
document.getElementById('pc-canvas-view').style.display = 'block';
renderCanvas();
