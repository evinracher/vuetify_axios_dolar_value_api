<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card>
            <v-date-picker
              full-width
              locale="es-co"
              :min="minDate"
              :max="maxDate"
              v-model="date"
              @change="getDolar(date)"
            ></v-date-picker>
          </v-card>
          <v-card color="error" dark>
            <v-card-text class="display-1 text-center">
              {{ value }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      date: new Date().toISOString().substring(0, 10),
      minDate: "1984",
      maxDate: new Date().toISOString().substring(0, 10),
      value: null,
    };
  },
  methods: {
    ...mapActions(["setLoading"]),
    async getDolar(date) {
      try {
        let invertedDate = date.split("-").reverse().join("-");
        this.setLoading({ title: "Loading data...", state: true });
        let res = await axios.get(
          "https://mindicador.cl/api/dolar/" + invertedDate
        );
        this.setLoading({ title: "Loading data...", state: false });
        this.value = res.data.serie[0]?.valor || "Without results";
      } catch (error) {
        console.error(error);
      } finally {
      }
    },
  },
  created() {
    this.getDolar(this.date);
  },
};
</script>
