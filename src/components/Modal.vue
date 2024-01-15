<template>
    <div class="modal" v-if="showModal">
        <div class="modal-content">
        <!-- <p>{{We are sorry, the product is currently unavailable.}}</p> -->
        <p>{{message}}</p>
        <button @click="closeModal">Close</button>
        </div>
    </div>
</template>

<script>

    export default {
        /* Modal container */
        props : ['showModal','message'],
        // data() {
        //     return {
        //         showModal
        //     }
        // },
        methods: {
        closeModal() {
            this.$emit('closeModal');
        }
  }
        
    }

</script>




<style>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal content */
.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

}

.modal-content p{
    font-weight: bold;
}

    /* Close button */
    .modal-content button {
    background-color: orange;
    border: none;
    color: #333;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    }

    /* Close button hover effect */
    .modal-content button:hover {
    background-color: orangered;
    }
    
</style>