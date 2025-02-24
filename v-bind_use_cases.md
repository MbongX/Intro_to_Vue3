Use cases of the v-bind attribute:

Binding image to directive :

<img v-bind:src="image">

binding text to directive:
<img :alt="description">

Binding links
<a :href="url">

binding classes
<div :class="isActive">

binding styles
<span :style="isActive">

disabling a button with v-bind:
<span :disabled="isDisabled">