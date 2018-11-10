function renderHTML(data) {
    var plansBox = '';
    var currencyUS = '$';

    for (let i = 0; i < data.length; i++) {
        plansBox +=
            '<div class="col-sm-6 col-md-4">' +
                '<div class="hexagon">' +
                    '<div class="price-plan-header-text">' +
                        '<h6>' + data[i].price + currencyUS + '</h6>' +
                        '<p>Monthly</p>' +
                    '</div>' +
                '</div>' +
                '<div class="text-center pricing-plan-body ">' +
                    '<div class="plan_name ">' +
                        '<h6>' + data[i].title + '</h6>' +
                    '</div>' +
                    '<ul id="pricing_pans" class="list-group">';

        for (let ii = 0; ii < data[i].benefits.length; ii++) {
            if (data[i].benefits[ii].status === 1) {
                plansBox += '<li class="list-group-item">' + '<i class="fas fa-check"></i>'
                    + data[i].benefits[ii].name + '</li>';
            } else {
                plansBox += '<li class="list-group-item">' + '<i class="fas fa-times"></i>'
                    + data[i].benefits[ii].name + '</li>';
            }
        }
        plansBox +=    '<li class="list-group-item">' +
                            '<button class="btn price-plan-order-btn">' +
                                '<i class="fab fa-opencart"></i>' +
                                'Order Now' +
                             '</button>' +
                        '</li>' +
                    '</ul>' +
                '</div>' +
            '</div>'
        ;
    }
    planContainer.insertAdjacentHTML('beforeend', plansBox);
}