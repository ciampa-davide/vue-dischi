var app= new Vue(
  {
    el:"#root",
    data: {
      disks: [],
      selectedValue:"",
      genres:[]
    },
    methods:{

    },

    mounted: function(){
      const self = this;
      axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then( function(result){
        self.disks = result.data.response;

        //ordino i dischi per data
        self.disks.sort(function(a, b){
          if(a.year < b.year) return -1;
        });

        //generi
        self.disks.forEach(
          (element) => {
            if(!self.genres.includes(element.genre)){
              self.genres.push(element.genre);
            }
          }
        );

        console.log(self.disks);
        }
      )
    }
  }
)
