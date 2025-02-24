                        <!--We'll use the V-IF directory here | explained as If InStock is true, display 'In Stock' | else display 'Out of Stock'-->
                        <p v-if="inStock">In Stock</p>
                        <p v-else>Out of Stock</p>
                        <!--We don't always need to pair a v-if with a v-else-->
                        <!--We also use the v-show directive here-->
                        <p v-show="inStock">In Stock</p> <!--the p element should be hiiden via the Css visible tag-->
                        <p v-show!="inStock">In Stock</p> <!--the p element should be visible  via the Css visible tag-->
                        <!--Creating chained conditional logic-->
                        <p v-if="inventory > 10">In Stock</p>
                        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                        <p v-else>Out of Stock</p>
