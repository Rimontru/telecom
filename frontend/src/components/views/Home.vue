<template>
  <section id="Home">
    <h4 class="mb-5">Registros de las radiobases</h4>
    <div class="row mb-5">
      <div class="col-2">
        <select class="form-control" v-if="selectPaginas.length > 0" v-model="actual">
          <option v-for="pagina in selectPaginas" :value="pagina">{{ 'Página no. ' + pagina }}</option>
        </select>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-2">
        <input class="form-control" type="search" v-model="buscar" placeholder="buscar radiobase">
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-2">
        <select class="form-control" v-model="region">
          <option value="null">Regiones</option>
          <option value="1">No. 1</option>
          <option value="2">No. 2</option>
          <option value="3">No. 3</option>
          <option value="4">No. 4</option>
          <option value="6">No. 6</option>
          <option value="9">No. 9</option>
        </select>
      </div>
    </div>
      <table class="table table-sm table-bordered" >
        <thead>
          <tr class="table-primary">
            <th scope="col" width="50">#</th>
            <th scope="col" width="120">Radiobase</th>
            <th scope="col">08-21</th>
            <th scope="col">08-22</th>
            <th scope="col">08-23</th>
            <th scope="col">08-24</th>
            <th scope="col">08-25</th>
            <th scope="col">08-26</th>
            <th scope="col">08-27</th>
            <th scope="col">08-28</th>
            <th scope="col">08-29</th>
            <th scope="col">08-30</th>
            <th scope="col">08-31</th>
            <th scope="col">09-01</th>
            <th scope="col">09-02</th>
            <th scope="col">09-03</th>
            <th scope="col">09-04</th>
            <th scope="col">09-05</th>
            <th scope="col">09-06</th>
            <th scope="col">09-07</th>
            <th scope="col">09-08</th>
            <th scope="col">09-09</th>
            <th scope="col">09-10</th>
          </tr>
        </thead>
      </table>
    <span class="table-responsive" style="height: 50vh; overflow-y: scroll;">
      <table class="table table-sm table-bordered" >
        <thead style="color: white;">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Radiobase</th>
            <th scope="col">08-21</th>
            <th scope="col">08-22</th>
            <th scope="col">08-23</th>
            <th scope="col">08-24</th>
            <th scope="col">08-25</th>
            <th scope="col">08-26</th>
            <th scope="col">08-27</th>
            <th scope="col">08-28</th>
            <th scope="col">08-29</th>
            <th scope="col">08-30</th>
            <th scope="col">08-31</th>
            <th scope="col">09-01</th>
            <th scope="col">09-02</th>
            <th scope="col">09-03</th>
            <th scope="col">09-04</th>
            <th scope="col">09-05</th>
            <th scope="col">09-06</th>
            <th scope="col">09-07</th>
            <th scope="col">09-08</th>
            <th scope="col">09-09</th>
            <th scope="col">09-10</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="Registros.length > 0" v-for="(Registro,index) in Registros">
            <td>{{ ++index }}</td>
            <td>{{ Registro.radiobase }}</td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-21'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-22'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-23'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-24'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-25'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-26'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-27'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-28'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-29'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-30'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-08-31'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-01'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-02'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-03'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-04'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-05'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-06'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-07'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-08'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-09'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
            <td class="text-center" v-if="Registro.fecha.substring(0,10) == '2019-09-10'">
              <span class="badge" v-bind:class="{'badge-danger': (Registro.trafico>0 && Registro.trafico<=15), 'orange': (Registro.trafico>15 && Registro.trafico<=40), 'badge-warning': (Registro.trafico>40 && Registro.trafico<=90), 'badge-success': (Registro.trafico>90)}">
              {{ Registro.trafico }}
              </span>
            </td>
            <td class="text-center" v-else><span class="badge badge-secondary">-</span></td>
         </tr>
        </tbody>
      </table>
    </span>
  </section>
</template>

<script>

// RUTA HACIA LA APIREST
const api = window.location.href.replace("8080/", "3000");

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Load Home Component',
      mostrar: 1000,
      actual: 1,
      ultima: 0,
      selectPaginas: [],
      Registros: [],
      buscar: '',
      region: null,
    }
  },
  watch: {
    actual: {
      handler: function (val) {
        this.getRegistrosBy()
      }
    },
    buscar: {
      handler: function (val) {
        if (val === "")
          this.getRegistrosBy();
        else{
          this.Registros = this.Registros.filter( (find) => find.radiobase.includes(val));
        }
      }
    },
    region: {
      handler: function (val) {
        if (val == null)
          this.getRegistrosBy();
        else{
          this.Registros = this.Registros.filter( (find) => find.region.includes(val));
        }
      }
    },
  },
  mounted () {
     console.log(this.msg);

     // EJECUTAMO LAS PRIMERAS ACCIONES
     this.totalRegistros();
     this.getRegistrosBy();
  },
  methods: {
    totalRegistros: function() {
      var http = api + '/total-de-registros';

      axios
      .post(http).then((res, e)  => {
        //console.log(res.data)

        var total = parseInt(res.data[0].total_regitros), paginas = total/this.mostrar;

        for(let i=1; i<=paginas; i++)
          this.selectPaginas.push(i);

      })
      .catch(e => {
          console.log(e);
      });
    },
    getRegistrosBy: function() {
      var http = api + '/find/take/radiobases';

      let ir = this.mostrar * (this.actual-1);

      axios
      .post(http, {inicia: ir, mostrar: this.mostrar}).then((res, e)  => {
        this.Registros = res.data;

      }).catch(e => {
          console.log(e);
      });

    },
  }
}
</script>
<style>
.orange{
  color: #fff;
  background-color: #dc8235;
}
</style>
