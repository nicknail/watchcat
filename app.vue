<template>
  <div class="flex 2xl:w-screen 2xl:h-screen text-center justify-center items-center overflow-x-hidden">
    <div class="flex flex-col 2xl:flex-row items-center">
      <img class="w-80" src="https://cataas.com/cat" alt="Cat" />
      <div class="m-8 flex flex-col items-center">
        <div class="mb-16 flex flex-col justify-between">
          <h1 class="mb-4 text-3xl text-center select-none">Прошлое</h1>
          <input
            class="w-96 p-2 border-2 rounded-md text-3xl text-neutral-400"
            type="text"
            :value="true_date(-true_value)"
            disabled
          />
        </div>

        <div class="mb-16 flex flex-col justify-between items-center">
          <h1 class="mb-4 text-3xl text-center select-none">Настоящее</h1>

          <div class="h-36 mb-8 flex flex-col items-center">
            <input
              class="w-96 p-2 border-2 rounded-md border-neutral-400 text-3xl text-neutral-600"
              :type="type"
              v-model="date"
              autofocus
            />

            <select
              class="w-36 h-14 mt-4 text-lg text-center rounded-md"
              v-model="type"
            >
              <option value="datetime-local">Шаблон</option>
              <option value="text">Вручную</option>
            </select>
          </div>

          <div class="flex flex-wrap justify-between">
            <input
              class="w-40 m-2 p-2 border-2 rounded-md border-neutral-400 text-neutral-600 text-2xl"
              type="number"
              min="0"
              placeholder="Дни"
              v-model="values.days"
            />
            <input
              class="w-40 m-2 p-2 border-2 rounded-md border-neutral-400 text-neutral-600 text-2xl"
              type="number"
              min="0"
              placeholder="Часы"
              v-model="values.hours"
            />
            <input
              class="w-40 m-2 p-2 border-2 rounded-md border-neutral-400 text-neutral-600 text-2xl"
              type="number"
              min="0"
              placeholder="Минуты"
              v-model="values.minutes"
            />
            <input
              class="w-40 m-2 p-2 border-2 rounded-md border-neutral-400 text-neutral-600 text-2xl"
              type="number"
              min="0"
              placeholder="Секунды"
              v-model="values.seconds"
            />
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <h1 class="mb-4 text-3xl text-center select-none">Будущее</h1>
          <input
            class="w-96 p-2 border-2 rounded-md text-3xl text-neutral-400"
            type="text"
            :value="true_date(true_value)"
            disabled
          />
        </div>
      </div>
      <img
        class="w-80"
        src="https://cataas.com/cat?tag=."
        alt="Cat"
      />
    </div>
  </div>
</template>

<script setup>
const type = ref("text");
const date = ref(new Date().toLocaleString());

const values = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});
const factors = {
  days: 1000 * 60 * 60 * 24,
  hours: 1000 * 60 * 60,
  minutes: 1000 * 60,
  seconds: 1000,
};

const true_value = computed(() => {
  return (
    values.value.days * factors.days +
    values.value.hours * factors.hours +
    values.value.minutes * factors.minutes +
    values.value.seconds * factors.seconds
  );
});
const true_date = (amount) => {
  return new Date(new Date(date.value).getTime() + amount).toLocaleString();
};
</script>
