function eventsPagination(eventGroups) {
    _.each(eventGroups, function (item, index) {
        index = index + 1;

        // Various items per page depends on media query and upcoming/past events
        let itemsPerPage = 0;

        if (index === 1) {
            if (Modernizr.mq(MQ.down)) {
                itemsPerPage = 2;
            }
            if (Modernizr.mq(MQ.up)) {
                itemsPerPage = 3;
            }
        }

        if (index === 2) {
            if (Modernizr.mq(MQ.down)) {
                itemsPerPage = 2;
            }
            if (Modernizr.mq(MQ.up)) {
                itemsPerPage = 4;
            }
        }

        // Init pagination plugin
        const $pagination = $('#events-pagination-' + index);

        $pagination.pagination({
            dataSource: item.events,
            pageSize: itemsPerPage,
            ulClassName: 'pagination pagination-lg justify-content-center',
            prevText: 'Previous',
            nextText: 'Next',
            callback: function (data) {
                const template = _.template($('#event-template').html());
                const $container = $('#events-' + index);

                $container.empty();

                _.each(data, function (event) {
                    const html = template(event);

                    $container.append(html);

                    // Adding Bootstrap pagination classes
                    $pagination.find('li').addClass('page-item');
                    $pagination.find('a').addClass('page-link');
                });
            }
        });

        // Hiding pagination navigation if items are enough for one page
        if (item.events.length <= itemsPerPage) {
            $pagination.hide();
        }
    });
}
