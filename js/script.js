var app= new Vue(
  {
    el:"#root",
    data: {
      disks: [""]
    },
    methods:{

    },

    mounted: function(){
      const self = this;
      axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then( function(result){
        //ordino i dischi per data
        let disk = result.data.response;
        disk.sort(function(a, b){
          return a.title - b.title;
        });
        self.disks = disk;
        console.log(self.disks);
        }
      )
    }
  }
)
