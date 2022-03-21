var app = new Vue({
  el: '#app',
  data: {
    santri: [],
    tanggal: '',
    aktif: 0,
    jam: '00',
    menit: '00',
    ditt: ['difa', 'akma', 'akbar'],
    urutan1: [],
    urutan2: [],
    dataAktif: [],
    edit: false,
    dataUrutan:[],
    

  },
  computed: {

    dataAntri() {
      if (this.urutan2.length > 0)
      return this.urutan2[0].urutan.split(",");
    },

    dataUrut() {
      let abc = [];
      this.santri.forEach(element => {
          abc.push(element.nama)
      });
      return abc
    },
    HasilPertandingan: function () {
      return this.event.filter((blog) => {
        return blog.status == '2'
      });
    },
    events: function () {
      return this.event.filter((blog) => {
        return blog.status == '1'
      });
    },
    urutPlayers() {
      function compare(a, b) {
        if (a.player < b.player)
          return -1;
        if (a.player > b.player)
          return 1;
        return 0;
      }
  
      return this.players.sort(compare);
    },
    urutTurnaments() {
      function compare(a, b) {
        if (a.row > b.row)
          return -1;
        if (a.row < b.row)
          return 1;
        return 0;
      }
  
      return this.turnamens.sort(compare);
    },
    data_match_sort() {
      function compare1(a, b) {
        if (a.row > b.row)
          return -1;
        if (a.row < b.row)
          return 1;
        return 0;
      }
  
      return this.data_match[0].sort(compare1);
    },
    data_point_sort() {
      function compare1(a, b) {
        if (a.row > b.row)
          return -1;
        if (a.row < b.row)
          return 1;
        return 0;
      }
  
      return this.data_point.sort(compare1);
    },

    groups1() {
      if (this.grups.length > 0) {
        const result = {};

        for (const { grup, namaTim, scorePlus, scoreMin, poin, games, selisihGames, JumlahMatch } of this.grups) {
          if (!result[grup]) result[grup] = [];
          result[grup].push({ grup, namaTim, scorePlus, scoreMin, poin, games, selisihGames, JumlahMatch });
        }
        return result;
      }
    },
    







  },
  methods: {
    acakUrutan() {
      this.acak(this.santri)
    },

    acak(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        Vue.set(array, i, array[j]);
        Vue.set(array, j, temp);
      }
    },

    // simpanUrutan() {
    //   console.log(this.santri);
    // },
    klikTelpon(x,index) {
        if (confirm("Anda memulai telpon sekarang : "+x) == true) {
          this.aktif = index + 1;
          const d = new Date();
          let hour = d.getHours();
          this.jam = hour;

          const dd = new Date();
          let minutes = dd.getMinutes();
          this.menit = minutes;

                var it = 1;
                var itimestamp = this.aktif;
                var jam1 = this.jam;
                var menit1 = this.menit;
                var url = `https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=update&table=aktif&id=${it}&data={"index":"${itimestamp}","jam":"${jam1}","menit":"${menit1}"}`
                // this.test = url;
                // timestamp=${itimestamp}
          // console.log(url)
                $.ajax({
                type: 'GET',
                url: url,
                crossDomain: true,
                dataType: 'jsonp',
                dataType: "text",
                success: function(resultData) { 
                    console.log("oke")
                }
                });
                



      }     
    },
    simpanUrutan() {
      if (this.tanggal) {
        this.santri.forEach(element => {
          this.urutan1.push(element)
        });
                
        var vId = Date.now();
        var vUserName = this.tanggal.toString();
        // var vPassword = this.dataUrut;
        var ditt = this.dataUrut;

        // var vNama = this.Nama.toString();
        var lin = `https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=insert&table=urutan&data={"id":"${vId}","tanggal":"${vUserName}","urutan":"${ditt}"}`;
        // this.test = lin;

        // var lin = `https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=insert&table=urutan&data={"tanggal":"${vUserName}","urutan":${vPassword}}`;
                    
        $.ajax({
          type: 'GET',
          url: lin,
          // headers: {  'Access-Control-Allow-Origin': 'http://127.0.0.1:5500' },
          crossDomain: true,
          dataType: 'jsonp',
          dataType: "text",
          success: function (resultData) {
            app.jam = 00;
            app.menit = 00;
            app.aktif = 0;
            // app.login();
            alert('berhasil simpan')
          }
        });



        var it = 1;
        var itimestamp = 0;
        var jam1 = 0;
        var menit1 = 0;
        var url = `https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=update&table=aktif&id=${it}&data={"index":"${itimestamp}","jam":"${jam1}","menit":"${menit1}"}`
        // this.test = url;
        // timestamp=${itimestamp}
        // console.log(url)
        $.ajax({
          type: 'GET',
          url: url,
          crossDomain: true,
          dataType: 'jsonp',
          dataType: "text",
          success: function (resultData) {
            console.log("oke")
          }
        });
        
      
      } else {
        alert("tanggal belum di isi")
      }
      
      
    },

    editUrutan(s) {
      console.log(s)
      this.edit = true;
      if (this.urutan2.length > 0){
        this.dataUrutan = this.urutan2[0].urutan;
        }

    },

    updateUrutan() {
      if (this.urutan2.length > 0) {

        this.dataAntri = this.dataUrutan;
        var it = this.urutan2[0].id;
        console.log(it)
        var urutanx = this.dataUrutan;
        
        var url = `https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=update&table=urutan&id=${it}&data={"urutan":"${urutanx}"}`
        // this.test = url;
        // timestamp=${itimestamp}
        console.log(url)
        $.ajax({
          type: 'GET',
          url: url,
          crossDomain: true,
          dataType: 'jsonp',
          dataType: "text",
          success: function (resultData) {
            console.log("oke")
            app.edit = false;
            app.urutan2 = [];
            app.ambilUrutan();
          }
        });  


      }

    // ambil data grup

      


        
    },
    ambilUrutan() {
          this.urutan2 = [];

    var url ="https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=read&table=Qurutan";

    $.getJSON(url, function (json) {
    // console.log(json.data);
    // console.log(json.data.records)
    app.urutan2 = json.data;
    }); 
    },
    








            
      showOff(){
        this.header =false;
        // this.main = false;
        this.show_player = false;
        this.jumbo = false;
        this.show_ranking = false;
        this.show_turnamen = false;
        this.show_single_player = false;
        this.show_single_turnamen = false;
        this.show_event = false;
        

      },
      showAll(){
        this.header =true;
        // this.main = true;
        this.show_player = true;
        this.jumbo = true;
        this.show_ranking = true;
        this.show_turnamen = true;
        this.show_single_player = false;
        this.show_event = true;
        this.section =true ;

      },
      mklikMenu(){
          // this.showOff();
          this.main = false;
          this.show_menu = true;
      },
      klikPlayer(x){
        this.showOff();
        this.header = true;
        this.section = true;
        this.show_single_player = true;
        // this.selectedPlayer = x;
//         console.log(x);
        this.ambil_data_player(x);

      },
      ambil_data_player(id){
        this.selectedPlayer = [];
          var data_ranking = [];
          data_ranking = this.rankings.filter(x => x.id === id.id);
          // console.log(data_ranking);

          var data_player = [];
          data_player = this.players.filter(x => x.id === id.id);
          var selectedPlayer1 = data_ranking.concat(data_player);
          // console.log(selectedPlayer1);

          var data_match1 = [];
          data_match1 = this.matchs.filter(x => x.player1 == id.player||x.player2 == id.player||x.player3 == id.player ||x.player4 == id.player);
          // console.log(data_match1);

          this.data_match = [data_match1];
          
          var data_point = [];
          data_point = this.points.filter(x => x.id === id.id);
          this.data_point = data_point;
          // console.log(selectedPlayer1);
          
          var ranking_player = data_ranking.concat(data_player);



          var selectedPlayer1 = ranking_player.concat([this.data_match_sort]);

          var selectedPlayer2 = selectedPlayer1.concat([this.data_point_sort]);
          // console.log(selectedPlayer1);


        return this.selectedPlayer = selectedPlayer2;
      
      },
      klikRanking(){
        this.show_menu = false;
        this.main = true;
        this.showOff();
        this.header = true;
        this.show_ranking = true;

      },
      klikTurnamen(){
        this.show_menu = false;
        this.main = true;
        this.showOff();
        this.header = true;
        this.show_turnamen = true;

      },
      klikPlayers(){
        this.showOff();
        this.main = true;
        this.header = true;
        this.show_menu = false;
        this.show_player = true;

      },
      klikTurnamen(){
        this.showOff();
        this.main = true;
        this.header = true;
        this.show_menu = false;
        this.show_turnamen = true;
        

      },
      klik_satu_turnamen(xx){
        this.showOff();
        this.main = true;
        this.header = true;
        this.show_menu = false;
        this.show_turnamen = false;
        this.show_single_turnamen = true;

        var abc = this.points.filter(x => x.turnamen == xx.nama);
        var bcd = this.matchs.filter(x => x.turnamen == xx.nama);
        var foto = xx.foto;
        var nama_turnamen = xx.nama;
        var tgl = xx.tanggal;
        var dokumentasi = xx.dokumentasi;
        return this.satu_turnamen = [abc, bcd, foto, nama_turnamen, dokumentasi, tgl];
    },
      
    nextSlide() {
      this.current++;
      if (this.current >= this.players.length)
        this.current = 0;
      
    },

    play () {
      // alert('dfsafd')
      this.timer = setInterval(function() {
        app.nextSlide();
        
      }, 4000);
    },
    mulai () {
      // alert('dfsafd')
      setTimeout (function() {
        app.showOff();
        app.show_slide = true;
        app.play();
        // alert('jlkjfkldjsfd')
      }, 2000);
    },
    stop_slide () {
      this.show_slide = false;
      this.main = true;
      this.header = true;
      this.show_event = true;
      setTimeout (function() {
        app.mulai();
      }, 600000);
    },




  },

  created() {
    // play slide show
    // this.mulai ()

    // ambil data grup
    this.santri = [];

    var url ="https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=read&table=reff";

    $.getJSON(url, function (json) {
    // console.log(json.data);
    // console.log(json.data.records)
    app.santri = json.data;
    }); 
    
        // ambil data grup
    this.urutan2 = [];

    var url ="https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=read&table=Qurutan";

    $.getJSON(url, function (json) {
    // console.log(json.data);
    // console.log(json.data.records)
    app.urutan2 = json.data;
    }); 


            // ambil data grup
    this.dataAktif = [];

    var url ="https://script.google.com/macros/s/AKfycbwY7gq_8UVJkczdyyaIQR5aTvjTaWE272YkWMvSZvmo0tKk9GQ88kstKAUo-Tt6p4rs/exec?action=read&table=aktif";

    $.getJSON(url, function (json) {
    console.log(json.data);
    // console.log(json.data.records)
      app.aktif = json.data[0].index;
      app.jam = json.data[0].jam;
      app.menit = json.data[0].menit;
    }); 

    

    



  },

})
