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

        self.disks = result.data.response;
        console.log(self.disks);
        }
      )
    }
  }
)
