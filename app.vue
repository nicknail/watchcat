<template>
  <div
    class="flex 2xl:w-screen 2xl:h-screen text-center justify-center items-center overflow-x-hidden"
  >
    <div class="flex flex-col 2xl:flex-row items-center">
      <img class="w-80" src="https://cataas.com/cat" alt="Cat" />
      <div class="m-8 flex flex-col items-center">
        <div class="mb-16 flex flex-col justify-between">
          <h1 class="mb-4 text-3xl text-center select-none">Прошлое</h1>
          <input
            class="w-96 p-2 border-2 rounded-md text-3xl text-neutral-400"
            type="text"
            :value="true_value(true_date(), -1)"
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
              v-model="amount.days"
            />
            <input
              class="w-40 m-2 p-2 border-2 rounded-md border-neutral-400 text-neutral-600 text-2xl"
              type="number"
              min="0"
              placeholder="Часы"
              v-model="amount.hours"
            />
            <input
              class="w-40 m-2 p-2 border-2 rounded-md border-neutral-400 text-neutral-600 text-2xl"
              type="number"
              min="0"
              placeholder="Минуты"
              v-model="amount.minutes"
            />
            <input
              class="w-40 m-2 p-2 border-2 rounded-md border-neutral-400 text-neutral-600 text-2xl"
              type="number"
              min="0"
              placeholder="Секунды"
              v-model="amount.seconds"
            />
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <h1 class="mb-4 text-3xl text-center select-none">Будущее</h1>
          <input
            class="w-96 p-2 border-2 rounded-md text-3xl text-neutral-400"
            type="text"
            :value="true_value(true_date(), 1)"
            disabled
          />
        </div>
      </div>
      <img class="w-80" src="https://cataas.com/cat?tag=." alt="Cat" />
    </div>
  </div>
</template>

<script setup>
const dayjs = useDayjs();
const template = [
  "DD.MM.YYYY, HH:mm:ss",
  "en",
  "ru",
  "DD.MM.YYYY, HH:mm",
  "HH:mm:ss",
  "HH:mm",
];

const type = ref("text");
const date = ref(dayjs().format(template[0]));

const amount = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

const true_date = () => {
  return dayjs(date.value, type.value === "text" && template);
};

const true_value = (date, factor) => {
  return date
    .add(amount.value.days * factor, "days")
    .add(amount.value.hours * factor, "hours")
    .add(amount.value.minutes * factor, "minutes")
    .add(amount.value.seconds * factor, "seconds")
    .format(template[0]);
};
</script>
