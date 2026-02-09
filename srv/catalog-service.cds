using {Northwind as external} from './external/Northwind';

service CatalogService {

    
    entity ProductsSet as projection on external.Products {
        key ID, Name, Description, ReleaseDate, DiscontinuedDate, Rating, Price
    };

}