var simplemaps_countrymap_mapdata={
    main_settings: {
     //General settings
      width: "responsive", //'700' or 'responsive'
      background_color: "#FFFFFF",
      background_transparent: "yes",
      border_color: "#ffffff",
      
      //State defaults
      state_description: "State description",
      state_color: "#88A4BC",
      state_hover_color: "#3B729F",
      state_url: "",
      border_size: 1.5,
      all_states_inactive: "no",
      all_states_zoomable: "yes",
      
      //Location defaults
      location_description: "Location description",
      location_url: "",
      location_color: "#FF0067",
      location_opacity: 0.8,
      location_hover_opacity: 1,
      location_size: 25,
      location_type: "square",
      location_image_source: "frog.png",
      location_border_color: "#FFFFFF",
      location_border: 2,
      location_hover_border: 2.5,
      all_locations_inactive: "no",
      all_locations_hidden: "no",
      
      //Label defaults
      label_color: "#ffffff",
      label_hover_color: "#ffffff",
      label_size: 16,
      label_font: "Arial",
      label_display: "auto",
      label_scale: "yes",
      hide_labels: "no",
      hide_eastern_labels: "no",
     
      //Zoom settings
      zoom: "yes",
      manual_zoom: "yes",
      back_image: "no",
      initial_back: "no",
      initial_zoom: "-1",
      initial_zoom_solo: "no",
      region_opacity: 1,
      region_hover_opacity: 0.6,
      zoom_out_incrementally: "yes",
      zoom_percentage: 0.99,
      zoom_time: 0.5,
      
      //Popup settings
      popup_color: "white",
      popup_opacity: 0.9,
      popup_shadow: 1,
      popup_corners: 5,
      popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
      popup_nocss: "no",
      
      //Advanced settings
      div: "map",
      auto_load: "yes",
      url_new_tab: "no",
      images_directory: "default",
      fade_time: 0.1,
      link_text: "View Website",
      popups: "detect",
      state_image_url: "",
      state_image_position: "",
      location_image_url: ""
    },
    state_specific: {
      BRAC: {
        name: "Acre"
      },
      BRAL: {
        name: "Alagoas"
      },
      BRAM: {
        name: "Amazonas"
      },
      BRAP: {
        name: "Amapá"
      },
      BRBA: {
        name: "Bahia"
      },
      BRCE: {
        name: "Ceará"
      },
      BRDF: {
        name: "Distrito Federal"
      },
      BRES: {
        name: "Espírito Santo"
      },
      BRGO: {
        name: "Goiás"
      },
      BRMA: {
        name: "Maranhão"
      },
      BRMG: {
        name: "Minas Gerais"
      },
      BRMS: {
        name: "Mato Grosso do Sul"
      },
      BRMT: {
        name: "Mato Grosso"
      },
      BRPA: {
        name: "Pará"
      },
      BRPB: {
        name: "Paraíba"
      },
      BRPE: {
        name: "Pernambuco"
      },
      BRPI: {
        name: "Piauí"
      },
      BRPR: {
        name: "Paraná"
      },
      BRRJ: {
        name: "Rio de Janeiro"
      },
      BRRN: {
        name: "Rio Grande do Norte"
      },
      BRRO: {
        name: "Rondônia"
      },
      BRRR: {
        name: "Roraima"
      },
      BRRS: {
        name: "Rio Grande do Sul"
      },
      BRSC: {
        name: "Santa Catarina"
      },
      BRSE: {
        name: "Sergipe"
      },
      BRSP: {
        name: "São Paulo"
      },
      BRTO: {
        name: "Tocantins"
      }
    },
    locations: {},
    labels: {
      BRAC: {
        name: "Acre",
        parent_id: "BRAC"
      },
      BRAL: {
        name: "Alagoas",
        parent_id: "BRAL"
      },
      BRAM: {
        name: "Amazonas",
        parent_id: "BRAM"
      },
      BRAP: {
        name: "Amapá",
        parent_id: "BRAP"
      },
      BRBA: {
        name: "Bahia",
        parent_id: "BRBA"
      },
      BRCE: {
        name: "Ceará",
        parent_id: "BRCE"
      },
      BRDF: {
        name: "Distrito Federal",
        parent_id: "BRDF"
      },
      BRES: {
        name: "Espírito Santo",
        parent_id: "BRES"
      },
      BRGO: {
        name: "Goiás",
        parent_id: "BRGO"
      },
      BRMA: {
        name: "Maranhão",
        parent_id: "BRMA"
      },
      BRMG: {
        name: "Minas Gerais",
        parent_id: "BRMG"
      },
      BRMS: {
        name: "Mato Grosso do Sul",
        parent_id: "BRMS"
      },
      BRMT: {
        name: "Mato Grosso",
        parent_id: "BRMT"
      },
      BRPA: {
        name: "Pará",
        parent_id: "BRPA"
      },
      BRPB: {
        name: "Paraíba",
        parent_id: "BRPB"
      },
      BRPE: {
        name: "Pernambuco",
        parent_id: "BRPE"
      },
      BRPI: {
        name: "Piauí",
        parent_id: "BRPI"
      },
      BRPR: {
        name: "Paraná",
        parent_id: "BRPR"
      },
      BRRJ: {
        name: "Rio de Janeiro",
        parent_id: "BRRJ"
      },
      BRRN: {
        name: "Rio Grande do Norte",
        parent_id: "BRRN"
      },
      BRRO: {
        name: "Rondônia",
        parent_id: "BRRO"
      },
      BRRR: {
        name: "Roraima",
        parent_id: "BRRR"
      },
      BRRS: {
        name: "Rio Grande do Sul",
        parent_id: "BRRS"
      },
      BRSC: {
        name: "Santa Catarina",
        parent_id: "BRSC"
      },
      BRSE: {
        name: "Sergipe",
        parent_id: "BRSE"
      },
      BRSP: {
        name: "São Paulo",
        parent_id: "BRSP"
      },
      BRTO: {
        name: "Tocantins",
        parent_id: "BRTO"
      }
    },
    legend: {
      entries: []
    },
    regions: {
      "0": {
        states: [
          "BRAC",
          "BRAM",
          "BRRO",
          "BRPA",
          "BRRR",
          "BRTO",
          "BRAP"
        ],
        name: "Norte",
        color: "#E8CF59",
        url: "Norte.html"
      },
      "1": {
        states: [
          "BRMA",
          "BRPI",
          "BRCE",
          "BRRN",
          "BRPB",
          "BRPE",
          "BRAL",
          "BRSE",
          "BRBA"
        ],
        name: "Nordeste",
        color: "#EADE72",
        url: "Nordeste.html"
      },
      "2": {
        states: [
          "BRMS",
          "BRMT",
          "BRGO",
          "BRDF"
        ],
        name: "Centro-Oeste",
        color: "#D6D277",
        url: "CentroOeste.html"
      },
      "3": {
        states: [
          "BRMG",
          "BRES",
          "BRSP",
          "BRRJ"
        ],
        name: "Sudeste",
        color: "#B9C281",
        url: "Sudeste.html"
      },
      "4": {
        states: [
          "BRPR",
          "BRSC",
          "BRRS"
        ],
        name: "Sul",
        color: "#9FAF8A",
        url: "Sul.html"
      }
    }
  };