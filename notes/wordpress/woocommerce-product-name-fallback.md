---
title: Woocommerce product name fallback
tags:
  - wordpress
---

I made a custom navbar for product page only. The navbar simple displays the product name after scrolling a certain point.

```php
if ( is_product() ) {

    global $product;

    echo $product->get_name();
}
```

Nice and easy. Working perfectly.

But when I move my site from aws to kinsta (a managed wp hosting) the code is failing.

It was saying 

```bash
PHP Fatal error: Uncaught Error: Call to a member function get_name() on string
```

What??

Then after research I found [this](https://github.com/woocommerce/woocommerce/issues/2920), that says I have to get the object if it's not an object.

```php
if ( is_product() ) {

    global $product;

    if ( ! is_object( $product ) ) {
        $product = wc_get_product( get_the_ID() );
    }

    echo $product->get_name();
}
```

Now, the programmer mind can take some rest 😪